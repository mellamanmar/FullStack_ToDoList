const express = require ("express");
const mongoose = require('mongoose');
const path = require ('path');
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require ('cors');

const toDoRouter = require ('./routes/to_do')


const app = express()
const port = 3000

//middlewares
app.set ('port', port)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.use (cors())
app.use ('/todo', toDoRouter)


// app.get('/', (req, res) => {
//   res.render('index.ejs')
// })

// app.get  ("/", (req, res) => {
//   res.send ("Hola mundo");
// })

// static files

app.listen (port, () =>  {
  console.log(`Mi puerto es ${port}`)
})

try {
  mongoose.connect('mongodb+srv://marimelissamc:1357913579@cluster0.jy7hnth.mongodb.net/ToDo-List')
} catch(error) {
  console.log(error)
}
finally {
  console.log('connected to db')
}

