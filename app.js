const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routers/pageRoute");
const addRoute = require("./routers/addRoute");
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

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use("/", pageRoute);
app.use("/add", addRoute);

/*
app.get("/index", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});

app.get("/ilaclar", (req, res) => {
  res.status(200).render("ilaclar", {
    page_name: "ilaclar",
  });
});

app.get("/algoritmalar", (req, res) => {
  res.status(200).render("algoritmalar", {
    page_name: "algoritmalar",
  });
});

app.get("/cihazlar", (req, res) => {
  res.status(200).render("cihazlar", {
    page_name: "cihazlar",
  });
});

app.get("/adrenalin", (req, res) => {
  res.render("adrenalin", {
    page_name: "adrenalin",
  });
});

app.get("/add", (req, res) => {
  res.render("add", {
    page_name: "add",
  });
});

app.get("/kayıt", (req, res) => {
  res.render("kayıt", {
    page_name: "kayıt",
  });
});
*/

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
