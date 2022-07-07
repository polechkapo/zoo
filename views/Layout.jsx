const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ admin, title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{ title }</title>
      </head>
      <header>
        <img src="" alt="Логотип урюпинского зоопарка" />
        <Navbar admin={admin} />
      </header>
      <body>
        { children }
      </body>
    </html>
  );
};
