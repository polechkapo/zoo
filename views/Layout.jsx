const React = require('react');
const Footer = require('./Footer');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="/js/client.js" defer />
        <title>{ title }</title>
        <script src="/js/client.js" defer />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" />
        <link href="/css/stylesheets.css" rel="stylesheet" />
      </head>
      <header className="header">
        <img src="/images/obz.jpeg" alt="Логотип урюпинского зоопарка" className="bar-img" />
        <Navbar />
      </header>
      <body>
        { children }
      </body>
      <footer className="footer">
        <img src="/images/obz.jpeg" alt="Логотип урюпинского зоопарка" className="bar-img" />
        <Footer />
      </footer>
    </html>
  );
};
