const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
app.use(cors());
const port = 3000;

app.use(express.json());
app.use("/app/v1", router);

app.listen(port, () => {
  console.log(`server is listen on ${port}`);
});
