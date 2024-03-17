const JWT = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "ThisIsMySecret";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    name: user.name,
    username: user.username,
  };
  const token = JWT.sign(payload, secret);
  return token;
}

function validateToken(token) {
  try {
    const payload = JWT.verify(token, secret);
    return payload;
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}


module.exports = {
  createTokenForUser,
  validateToken,
};
