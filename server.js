require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
// const userRouter = require("./router/user-Routes");
// const User = require("./Models/create-user");
const router = require("./router/user");

const app = express();
const port = process.env.PORT;

// middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection
dbConnect();

// routers
// app.use("/", userRouter);
// app.get("/", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     console.error("Error fetching users", error);
//     res.status(500).json({ msg: "Internal Server Error" });
//   }
// });
app.use("/", router);

app.listen(port, () => {
  console.log("port is running", port);
});
