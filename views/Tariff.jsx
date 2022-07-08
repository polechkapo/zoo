const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({ tariffs }) {
  return (
    <Layout>
      <div className="tafifs__container">
        <h1>Наши Тарифы</h1>
        <ul className='tarifs__lists'>
          <li>Стоимость посещения нашего зоопарка рассчитывается исходя из возраста и дня недели. </li>
          <li>Двери Урюпинского зоопарка открыты для вас ежедневно с 11:00 до 20:00</li>
        </ul>
        <p />
        <table className="tarifs__table">
          <tr align="center">
            <th>День</th>
            <th>Взрослый/ребенок</th>
            <th>Цена</th>
          </tr>
          {tariffs.map((price) => (
            <tr align="center">
              <td>{`${price.day_type}`}</td>
              <td>{`${price.human_type}`}</td>
              <td>{`${price.price}`}</td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  );
};
