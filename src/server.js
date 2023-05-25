const express = require('express')
const parser = require("body-parser");
var database = require('mongoose');
const cors = require("cors")

require("dotenv").config();
const app = express()
const port = process.env.PORT || 4000;


const ProductRoute = require("./router/product.route");
const UserRoute = require("./router/user.route");
database.connect(process.env.DB_URL);

var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions))

app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", UserRoute);
app.use("/product", ProductRoute);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})