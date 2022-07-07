const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalList({ animals, admin }) {
  return (
    <Layout>
      <ul className="card__lists">
        {animals.map((card) => (
          <li className="card__item" id={`${card.id}`} key={card.id}>
            <img src="" alt={`${card.name}`} />
            <h2>{card.name}</h2>
            <p>{card.desc}</p>
            {admin ? (
              <div className="card__edit-buttons">
                <a href={`/animals/${card.id}/edit`}>Изменить</a>
                <a href={`/animals/${card.id}/delete`}>Удалить</a>
              </div>
            )
              : <a href={`/animals/${card.id}/info`}>Подробнее</a>}
          </li>
        ))}
      </ul>
    </Layout>
  );
};
