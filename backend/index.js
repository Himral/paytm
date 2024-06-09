const express = require("express");

const rootRouter = require("./routes/index");
const app = express();


//Adding CORS (Cross Origin Resource Sharing) to the project
const cors = require("cors");
//const bodyParser = require("body-parser");
app.use(cors())

//Adding Body Parse to parse the json body
app.use(express.json());
app.use("/api/v1", rootRouter);

console.log("Working properly");

app.listen(3000);
