const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{ title }</title>
        <script src="/js/client.js" defer />
      </head>
      <header>
        <img src="" alt="Логотип урюпинского зоопарка" />
        <Navbar />
      </header>
      <body>
        { children }
      </body>
    </html>
  );
};
