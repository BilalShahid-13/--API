const express = require("express");
const router = express.Router();
const User = require("../Models/create-user"); // Correct path to the User model

// Route to get all users
router.get("/get", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/post", async (req, res) => {
  try {
    const body = req.body;
    const result = await User.create({
      name: body.name,
      lastname: body.lname,
    });
    console.log("result", result);
    return res.status(201).json({ msg: "data inserted sucessfully" });
  } catch (error) {
    console.error("Error inserting data", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
