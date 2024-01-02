// file upload imports
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./DB');
require('dotenv/config');

// templating engine
app.set('view engine', 'ejs');
// upload configs
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(cors());

connectDB(); //DB conncetion !

//middlewares 

app.use('/', require('./Routes/SubmitURL'));

//server listen.....
server.listen(process.env.PORT, () => {
    console.log("Server started...");
})


