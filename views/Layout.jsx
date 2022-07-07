const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="/js/client.js" defer />
        <link href="/css/stylesheets.css" rel="stylesheet" />


        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />

        <title>{ title }</title>
        <script src="/js/client.js" defer />
      </head>
      <header className="header">
        <img src="/images/obz.jpeg" alt="Логотип урюпинского зоопарка" className="bar-img" />
        <Navbar />
      </header>
      <body>
        { children }
      </body>
    </html>
  );
};
