require('dotenv').config(); // для чтения .env файла
require('@babel/register'); // бэбил для jsx файлов

const app = require('express')();
const configApp = require('./config/config_app'); // подключаем конфиги

const homeRouter = require('./routes/view/home_router');
const animalsRouter = require('./routes/view/animallist_router');
const tariffRouter = require('./routes/view/tariff_roter');
const deleteCardRout = require('./routes/api/delete_card_router');
const authRouter = require('./routes/view/auth_router');
const AdminCabinetRouter = require('./routes/view/admin_cabinet_router');
const AdminCabinetApiRouter = require('./routes/api/admin_cab_api');

const PORT = process.env.PORT ?? 3000;

configApp(app);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.use('/home', homeRouter);
app.use('/auth', authRouter);
app.use('/cabinet', AdminCabinetRouter);
app.use('/cabinet/api', AdminCabinetApiRouter);
app.use('/animals', animalsRouter);
app.use('/tariffs', tariffRouter);
app.use('/animals', deleteCardRout);

app.listen(PORT, () => {
  console.log(`Сервер шуршит на ${PORT}`);
});
