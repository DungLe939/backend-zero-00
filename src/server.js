const morgan = require('morgan')
const mysql = require('mysql2')
const path = require('path')
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8888;

//Debug morgan
// app.use(morgan('combined'));
//config template engine
configViewEngine(app);
//run app
app.use(webRouter);
//Test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});
//Test query
connection.query(
    'SELECT * FROM Users u;',
    function(err, results, fields) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Results >>>', results); // results contains rows returned by server
    }
);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
