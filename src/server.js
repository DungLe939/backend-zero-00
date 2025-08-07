const morgan = require('morgan')
const express = require('express');
const connection = require('./config/database')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8888;

//Debug morgan
// app.use(morgan('combined'));

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);
//run app
app.use(webRouter);

(async()=> {
    try {
        //Test connection
        connection();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("ERROR >>>>> Fail to connect: ")
    }
})();

