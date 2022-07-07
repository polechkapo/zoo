const React = require('react');
const { Context } = require('../middlewares/ssr');

module.exports = function Navigation() {
  const { admin } = React.useContext(Context);
  return (
    <nav className="navigation">
      <ul className="navigation__lists">
        {admin ? (
          <>
            <li className="navigation__item"><a href="/logout">Выйти</a></li>
            <li className="navigation__item"><a href="/home">Главная</a></li>
            <li className="navigation__item"><a href="/cabinet">Кабинет Администратора</a></li>
          </>
        )
          : (
            <>
              <li className="navigation__item"><a href="/auth/login">Вход для сотрудников</a></li>
              <li className="navigation__item"><a href="/home">Главная</a></li>
            </>
          )}
      </ul>
    </nav>
  );
};
