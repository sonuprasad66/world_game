const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");

app.get("/", (req, res) => {
  res.send("Main Home ");
});

app.use("/", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db Connected Successful");
    console.log(`App Listening on PORT ${process.env.PORT}`);
  } catch (err) {
    console.log("db Connected Faild");
    console.log(err);
  }
});
