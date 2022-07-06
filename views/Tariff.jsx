const React = require('react');
const Layout = require('./Layout');

module.exports = function Tariff({tariffs}) {
  return (
    <Layout>
      {tariffs.map((price) => (
        <li id={`${price.id}`}>
          <h1>{`${price.day_type}`}</h1>
          <h1>{`${price.human_type}`}</h1>
          <h1>{`${price.price}`}</h1>
        </li>
      ))}
    {/* <table className="table">
      <head>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </head>
      <body>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th> 
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </body>
    </table> */}
    </Layout>
  );
};
