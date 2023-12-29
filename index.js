const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");
const transactions = require("./routes/Transaction");

require("dotenv").config();
const PORT = 4001;

app.use(cors());
app.use(express.json());

app.use("/api/v1/transactions", transactions);

app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
