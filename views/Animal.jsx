const React = require('react');
const Layout = require('./Layout');

module.exports = function Animal({ animals }) {
  return (
    <Layout>
      <div className="card">
        <h2 className="animal_name">
          {`${animals.name}`}
        </h2>
        <div className="card_gallery">
          галерея фоток
        </div>
        <p className="card__descr">{`${animals.desc}`}</p>
      </div>
    </Layout>
  );
};
