const path = require('path');
const express = require('express')
const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    //config static file là lấy file ảnh từ public
    app.use('/', express.static(path.join(__dirname, '../public')));
}

module.exports = configViewEngine;