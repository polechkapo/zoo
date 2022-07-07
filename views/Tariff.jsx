const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({ tariffs }) {
  return (
    <Layout>
      <h1>Наши Тарифы</h1>
      <table>
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
    </Layout>
  );
};
