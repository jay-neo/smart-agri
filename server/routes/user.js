const { Router } = require("express");
const { User } = require("../models/user");
const { Data } = require("../models/data");
const router = Router();



router.get("/user", async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404);
    }
    const { name, username } = req.user;

    return res.status(200).json({name, username});
  } catch (error) {
    return res.status(406);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { fullName, token } = await User.matchPasswordAndGenerateToken(email, password);

    res.cookie("auth", token);
    res.cookie("client", fullName);
    return res.status(200).json({ "user": req.user.name });
  } catch (error) {
    return res.status(500).json({ error: "User not found" });
  }
});


router.post("/signin", async (req, res) => {

  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(406).json({ message: "User with this email already exists" });
    }
    
    const dataInstance = await Data.create({})
    
    await User.create({
      name,
      email,
      password,
      data: dataInstance._id,
    });
    

    const { fullName, token } = await User.matchPasswordAndGenerateToken(email, password);
    res.cookie("auth", token);
    res.cookie("client", fullName);

    return res.status(200).json({ message: fullName });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


router.delete("/logout", (req, res) => {
  if (req.cookies["auth"]) {
    res.clearCookie("auth");
  }
  if (req.cookies["client"]) {
    res.clearCookie("client");
  }
  return res.status(200).json({ message: 'okay' });
});



router.get('/user/:uid', async (req, res) => {
  try {
    const userId = req.params.uid;
    const user = await User.findOne({ 'username': userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});







module.exports = router;
