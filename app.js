var express = require('express');
var app = express();
var test = require("./controllers/testcontroller")
var sequelize = require('./db')
var bodyParser = require("body-parser")
var user = require("./controllers/usercontroller")
require('dotenv').config();
var card = require("./controllers/cardcontroller")
var login = require("./controllers/logincontroller")
var authTest = require("./controllers/authtestcontroller")


// var table = require('./models/test')

sequelize.sync()
app.use(bodyParser.json());
app.use(require('./middleware/headers'))


app.use("/api/user", user)
app.use("/test", test)
app.use("/api/login", login)
app.use(require('./middleware/validate-session'))
app.use("/authtest", authTest)
app.use("/api/card", card)


app.listen(4000, function(){
    console.log('App is listening on 4000')
})