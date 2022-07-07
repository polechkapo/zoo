const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');


module.exports = function AnimalList({ animals, photosList, admin }) {
  return (
    <Layout>
     
        <ul className="card__lists">
          {animals.map((card, i) => (
            <li className="cardItem" key={card.id}>
              <img src={`${photosList[i].img_href}`} alt={`${card.name}`} />
              <h2>{card.name}</h2>
              <p>{card.desc}</p>
              {admin ? (
                <div className="card__edit-buttons">
                  <a href={`animals/${card.id}/edit`}>Изменить</a>
                  <li><a className="deleteCard" href={`animals/${card.id}`}>Удалить</a></li>
                </div>
              )
                : <a href={`animals/${card.id}/info`}>Подробнее</a>}<br></br>
                <li><a className="deleteCard" href={`animals/${card.id}`}>Удалить</a></li>
      
            </li>
          ))}
        </ul>

    </Layout>
  );
};
