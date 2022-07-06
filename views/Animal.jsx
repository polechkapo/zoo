const React = require('react');
const Layout = require('./Layout');

module.exports = function Animal({ animal }) {
  return (
    <Layout>
      <div className="card">
        <h2 className="animal_name">
          {`${animal.name}`}
        </h2>
        <div className="card_gallery">
          галерея фоток
        </div>
        <p className="card__descr">{`${animal.desc}`}</p>
      </div>
    </Layout>
  );
};
