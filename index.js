const express = require("express");
const cors = require("cors");
const personRouter = require("./routes/personRouter");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/user", personRouter);

// run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.all("*", (req, res) => {
  res.send("No Route Found!!");
});

app.listen(port, () => {
  console.log(`server is running`);
});
