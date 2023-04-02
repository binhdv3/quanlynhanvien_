const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3030;
const { engine } = require("express-handlebars");
var methodOverride = require('method-override') //thư viện chuyển từ phương thức POST sang PUT
const route = require('./routes');
const db = require('./config/db');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

//Concect DB---->
db.conect();

app.use(methodOverride('_method')) // chuyen method
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

//Template engine
app.engine('hbs', engine({ extname : '.hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname , 'resources/views')); //co thể thay bằng 'resources', ' views'

//route init
route(app);

app.listen(port, ()=> {
    console.log(`App listening at http://localhost:${port}`)
})