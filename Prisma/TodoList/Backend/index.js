const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");

const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/app/v1", router);

app.listen(port, () => {
  console.log(`server is listen on ${port}`);
});
