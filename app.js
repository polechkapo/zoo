require('dotenv').config();
require('@babel/register');

const app = require('express')();
const configApp = require('./config/config_app'); // подключаем конфиги

const homeRouter = require('./routes/view/home_router');

const PORT = process.env.PORT ?? 3000;

configApp(app);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/home', homeRouter);

app.listen(PORT, () => {
  console.log(`Сервер шуршит на ${PORT}`);
});
