const React = require('react');
const Layout = require('./Layout');
const Navigation = require('./Navbar');

module.exports = function Header() {
  return (
    <Layout>
      <img src="" alt="Логотип урюпинского зоопарка" />
      <Navigation />
    </Layout>
  );
};
