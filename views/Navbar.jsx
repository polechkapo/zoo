const React = require('react');
const { Context } = require('../middlewares/ssr');

module.exports = function Navigation() {
  const { admin } = React.useContext(Context);
  return (
    <nav className="navigation">
      <ul className="navigation__lists">
        
        {admin ? (
          <>
            <li className="navigation__item"><a className="navigation_link" href="/auth/logout">Выйти</a></li>
            <li className="navigation__item"><a className="navigation_link" href="/home">Главная</a></li>
            <li className="navigation__item"><a className="navigation_link" href="/cabinet">Личный кабинет</a></li>
          </>
        )
          : (
            <>
              <li className="navigation__item"><a href="/auth/login">Сотрудникам</a></li>
              <li className="navigation__item"><a href="/home">Главная</a></li>
            </>
          )}
      </ul>
    </nav>
  );
};
