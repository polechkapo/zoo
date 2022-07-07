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
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={`/images/${animal.name}-фото1.jpg`} className="d-block w-100" alt="size" />
              </div>
              <div className="carousel-item">
                <img src={`/images/${animal.name}-фото2.jpg`} className="d-block w-100" alt="size" />
              </div>
              <div className="carousel-item">
                <img src={`/images/${animal.name}-фото3.jpg`} className="d-block w-100" alt="size" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Следующий</span>
            </button>
          </div>
        </div>
        <p className="card__descr">{`${animal.desc}`}</p>
      </div>
    </Layout>
  );
};
