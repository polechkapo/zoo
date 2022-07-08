const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="form_edit-info form-welcome">
        <p className='admin-title admin-title-welcome'>Добро пожаловать!</p>
        <form method="post" action="/auth/login" className="bord bord_login">
          <label htmlFor="log" className="">Логин:</label>
          <input type="text" id="log" className="" aria-describedby="loginHelp" name="login" />
          <label htmlFor="password" className="">Пароль:</label>
          <input type="password" id="password" className="" name="password" />
          <button type="submit" className="edit_form-button">Войти</button>
        </form>
      </div>
    </Layout>
  );
};
