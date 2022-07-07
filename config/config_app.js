const express = require('express');

const path = require('path'); // для мв статик
const session = require('express-session'); // экспресс для создания сессий
const FileStore = require('session-file-store')(session); // это объект который создает папку с сессиями и внутри нее будут файлы с конкретными авторизованными сейчас пользователями
const morgan = require('morgan');
const reactSsrMw = require('../middlewares/ssr'); // мв для более короткой отрисовки реакта
const getUser = require('../middlewares/getUser');

const sessionConfig = {
  store: new FileStore(), // создаем папку в которой будет храниться сессия залогиненого пользователя
  name: 'user_sid', // название кука
  secret: process.env.SESSION_SECRET ?? 'G(8x>|Ai^"+&', // шифрование кука
  resave: false, // пересохранение куки при каждом запросе, чтобы время хранения кука не обновлялось при каждом входе
  saveUninitialized: false, // создание сессии без регистрации
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

module.exports = function config(app) {
  app.use(reactSsrMw);
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true })); // разбирает квери на части чтобы мы могли к ним добраца
  app.use(express.json()); // распознает json в теле запроса и делает его читаемым для сервера
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(getUser);
};
