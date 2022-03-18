const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const pageRoute = require("./routers/pageRoute");
const ekleRoute = require("./routers/ekleRoute");
const categoryRoute = require("./routers/categoryRoute");
const userRoute = require("./routers/userRoute");
const app = express();

//mongoose Connect DB
/*
mongoose.connect('mongodb://localhost/yeni2_database').then(() => {
  console.log('DB Connected Succesfully')
});

*/
try {
  const db = mongoose.connect("mongodb://localhost/yeni2_database");

  console.log("success connection");
} catch (error) {
  console.log("Error connection: " + error);
}
/*
mongoose.connect('mongodb://localhost/medurla_database', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex: true
  
}).then(() => {
  console.log('DB Connected Successfuly')
}); 
*/

//Global kullanıcı giriş değişkeni
global.userIN = null;

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'user_session',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/yeni2_database' }),  
}));


//global kullanıcı değişkeni
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});

//Routes
app.use("/", pageRoute);
app.use("/ekle", ekleRoute);
app.use("/kategoriler", categoryRoute);
app.use("/users", userRoute);



const port = 3000;
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});

/*
const express = require("express");
const ejs = require("ejs");
const app = express();

const path = require("path");

//Middlewares
app.use(express.static("public"));

//Template
app.set("view engine", "ejs");

//ROUTES
app.get("/", (req, res) => {
  
  res.render("index");
});

app.get("/adrenalin", (req, res) => {
  
    res.render("adrenalin");
  });

  app.get("/add", (req, res) => {
  
    res.render("add");
  });

  app.get("/index", (req, res) => {
  
    res.render("index");
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});

*/
