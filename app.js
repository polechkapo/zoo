require('dotenv').config(); // для чтения .env файла
require('@babel/register'); // бэбил для jsx файлов

const app = require('express')();
const configApp = require('./config/config_app'); // подключаем конфиги

const authRouter = require('./routes/view/auth_router')

const homeRouter = require('./routes/view/home_router');
const animalsRouter = require('./routes/view/animallist_router')

const PORT = process.env.PORT ?? 3000;

configApp(app);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/home', homeRouter);
app.use('/animals', animalsRouter);


app.use('/auth', authRouter)
app.listen(PORT, () => {
  console.log(`Сервер шуршит на ${PORT}`);
});
