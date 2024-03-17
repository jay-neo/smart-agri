const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");
const { createTokenForUser } = require("../services/auth");
const { Data } = require("./data");


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    data: {
      type: Schema.Types.ObjectId,
      ref: Data
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {

  if (this.isNew) {
    let username = randomBytes(10).toString('hex');
    let existUserName = await this.constructor.findOne({ "username": username });
    while (existUserName) {
      username = randomBytes(10).toString('hex');
      existUserName = await this.constructor.findOne({ "username": username });
    }
    this.username = username;
  }

  if (this.isModified("password")) {
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = createHmac("sha256", salt)
      .update(this.password)
      .digest("hex");

    this.salt = salt;
    this.password = hashedPassword;
  }

  next();

});

userSchema.statics.matchPasswordAndGenerateToken = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("User not found!");

  const userProvidedHash = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");

  if (user.password !== userProvidedHash)
    throw new Error("Incorrect Password");

  const token = createTokenForUser(user);
  const fullName = user.name;
  return { fullName, token };
};







userSchema.statics.findDataOfUser = async function (req, res) {
  const userName = req.cookies["uid"];
  if (!userName) {
    return res.status(500).json({ message: "Server Error" });
  }
  this.findOne({ userName })
    .populate('data')
    .exec((err, userid) => {
      if (err) {
        throw new Error("Internal server error");
      }
      if (!userid) {
        throw new Error("Incorrect name");
      }
      return userid.data;
    })
}


const User = model("User", userSchema);

module.exports = {
  User
};
