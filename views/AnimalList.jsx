const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalList({ animals, photosList, admin }) {
  return (
    <Layout>
      <>
        <ul className="card__lists">
          {animals.map((card, i) => (
            <li className="cardItem"key={card.id}>
              <img src={`${photosList[i].img_href}`} alt={`${card.name}`} />
              <h2>{card.name}</h2>
              <p>{card.desc}</p>
              {admin ? (
                <div className="card__edit-buttons">
                  <a href={`animals/${card.id}/edit`}>Изменить</a>
                  {/* <button type="button" className="card_change" id={`card_change-${card.id}`} key={card.id}>Удалить</button>*/}
                </div>
              )
                : <a href={`animals/${card.id}/info`}>Подробнее</a>}<br></br>
              <li><a className="deleteCard" href={`animals/${card.id}`}>Удалить</a></li>
              {/* <button type="button" className="deleteCard" id={`card_change-${card.id}`} key={card.id}>Удалить</button> */}
            </li>
          ))}
        </ul>
      </>
    </Layout>
  );
};
