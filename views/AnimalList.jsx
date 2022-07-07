const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalList({ animals, photosList, admin }) {
  return (
    <Layout>
      <ul className="card__lists" name="Card">
        {animals.map((card, i) => (
          <li className="card__item" id={`${card.id}`} key={card.id}>
            <img src={`${photosList[i].img_href}`} alt={`${card.name}`} id={`${card.id}`} />
            <h2 id={`${card.id}`}>{card.name}</h2>
            <p id={`${card.id}`}>{card.desc}</p>
            {admin ? (
              <div className="card__edit-buttons">
                <a id={`card_change-${card.id}`} href={`animals/${card.id}/edit`}>Изменить</a>
                <a href={`animals/${card.id}/delete`}>Удалить</a>
              </div>
            )
              : (
                <div className="card__edit-buttons">
                  <a href={`/animals/${card.id}/edit`} className="changeCard" id={`${card.id}`}>Изменить</a>
                  <a href={`animals/${card.id}/delete`}>Удалить</a>
                  <a href={`animals/${card.id}/info`}>Подробнее</a>
                </div>
              )}
          </li>
        ))}
      </ul>
    </Layout>
  );
};
