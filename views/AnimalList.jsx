const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');

module.exports = function AnimalList({ animals, photosList }) {
  const { admin } = React.useContext(Context);
  return (
    <Layout>
      <ul className="card__lists" name="Card">
        {animals.map((card, i) => (
          <li className="cardItem" id={`${card.id}`} key={card.id}>
            <img className="card_img" src={`${photosList[i].img_href}`} alt={`${card.name}`} id={`${card.id}`} />
            <h2 id={`${card.id}`}>{card.name}</h2>
            <p className="card_desc" id={`${card.id}`}>{card.desc}</p>
            {admin && (
              <div className="card__edit-buttons">
                <a href={`/animals/${card.id}/edit`} className="changeCard edit__buttons edit__buttons-change" id={`${card.id}`}>Изменить</a>
                <a className="deleteCard edit__buttons edit__buttons-delete" href={`animals/${card.id}`}>Удалить</a>
                <a className="edit__buttons edit__buttons-more" href={`animals/${card.id}/info`}>Подробнее</a>
              </div>
            )}
            {console.log(admin)}
            {!admin &&
               (
                <div className="card__edit-buttons">
                  <a className="edit__buttons edit__buttons-more" href={`animals/${card.id}/info`}>Подробнее</a>
                </div>
              )}
          </li>
        ))}
      </ul>
    </Layout>
  );
};
