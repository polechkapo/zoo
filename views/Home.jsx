const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <div className="text-center bg-image">
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Добро пожаловать в Урюпинский зоопарк</h1>
              <h4 className="mb-3">г. Урюпинск, улица Ленина, дом 10</h4>
              <p className="main__desc">Урюпинский зоопарк — один из старейших зоопарков страны и единственный зоопарк области. Его богатая коллекция насчитывает до 600 видов животных, птиц, рыб и беспозвоночных. Зоопарк считается одним из самых маленьких в Европе, но в тоже время очень интересным для посещения, его площадь составляет всего 7,3 га.</p>
              <a className="btn btn-outline-light btn-lg" href="/animals" role="button">Наши животные</a>
            </div>
          </div>
        </div>
      </div>
      <div className="content__animals">
        <div className="content__container">
          <h2 className="content__title">Обитатели Урюпинского зоопарка</h2>
          <a className="btn btn-lg btn-more" href="/animals" role="button">Подробнее</a>
        </div>
        <ul className="content__lists">
          <li><img className="content__img" src="images/main_1.jpeg" alt="" /></li>
          <li><img className="content__img" src="images/main_2.jpeg" alt="" /></li>
          <li><img className="content__img" src="images/main_3.jpeg" alt="" /></li>
        </ul>
      </div>
      <div className='content__container-prices'>
      <div className="content__prices">
        <h2 className="content__prices-title">💶💶💶Стоимость посещения зоопарка💶💶💶</h2>
        <p className="content__prices-description">
          Стоимость посещения нашего зоопарка рассчитывается исходя из возраста и дня недели.
        </p>
        <a className="btn btn-lg btn-price" href="/tariffs" role="button">Тарифы зоопарка</a>
        </div>
      </div>
    </Layout>
  );
};
