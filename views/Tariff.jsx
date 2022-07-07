const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({ tariffs }) {
  return (
    <Layout>   
      <table className="table">
        <head>
          <tr>
            <th scope="col">Какой сегодня день?</th>
            <th scope="col">Насколько вы выросли?</th>
            <th scope="col">Каков итог цены</th>
          </tr>
        </head>
        <body>
          {tariffs.map((price) => (
            <><tr>
              <td>Будни</td>
              <td>Детский</td>
              <td>{`${price.price}`}</td>
            </tr>
              <tr>
                <td>Будни</td>
                <td>Взрослый</td>
                <td>{`${price.price}`}</td>
              </tr>
              <tr>
                <td>Выходной</td>
                <td>Детский</td>
                <td>{`${price.price}`}</td>
              </tr>
              <tr>
                <td>Выходной</td>
                <td>Взрослый</td>
                <td>{`${price.price}`}</td>
              </tr>
            </>
          ))}
        </body>
      </table>    
         
    </Layout>
  );
};
