const express = require("express");
const app = express();
const path = require("path");

const cors = require('cors');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors());

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  });
}

const port = 3001;
//
const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(express.json());

const router = require('./routes/board');
app.use('/', router);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//




const mysql = require('mysql');
const db = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : 'asas4041',
    database : 'apple'
});

app.get('/', (req, res) => {
    res.send('연결 되었습니다.')
});

app.get('/api/concat', (req, res) => {
  db.query("SELECT * FROM apple.concat", (err, rows) => {
    if (err) {
        console.log('err');
        res.send(err);
    } else{
        console.log('success');
        res.send(rows);
    }
});
});



app.listen(port, ()=>{
console.log(`Connect at https://localhost:${port}`);
});