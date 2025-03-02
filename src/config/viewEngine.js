const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    //xem lại join
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    // config static file: image,css,js
    app.use(express.static(path.join('./src', 'public')))// app.use(express.static('public'))
    // tuỳ vào file cấu hình để tuỳ chỉnh đường dẫn tới view
}

module.exports = configViewEngine;