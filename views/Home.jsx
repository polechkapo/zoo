const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <div>Приветствие</div><br></br>
      <div>Фоновое изображение</div><br></br>
      <div>
        <a href='/animals'>Животные</a><br></br>
        <a href='/tariffs'>Тарифы посещеия зоопарка</a><br></br>
      </div>
    </Layout>
  );
}
