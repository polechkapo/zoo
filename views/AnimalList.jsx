const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');

module.exports = function AnimalList({ animals, photosList }) {
  const { admin } = React.useContext(Context);
  return (
    <Layout>
      <ul className="card__lists">
        {animals.map((card, i) => (
          <li className="card__item" id={`${card.id}`} key={card.id}>
            <img src={`${photosList[i].img_href}`} alt={`${card.name}`} />
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
            {admin ? (
              <div className="card__edit-buttons">
                <a href={`animals/${card.id}/edit`}>Изменить</a>
                <a href={`animals/${card.id}/delete`}>Удалить</a>
                <a href={`animals/${card.id}/info`}>Подробнее</a>}
              </div>
            )
              : <a href={`animals/${card.id}/info`}>Подробнее</a>}
          </li>
        ))}
      </ul>
    </Layout>
  );
};
