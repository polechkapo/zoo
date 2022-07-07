const React = require('react');
// const Layout = require('***');

module.exports = function Login({ admin }) {
  return (

    <form method="post" action="/auth/login">
      <div className="">
        <label htmlFor="log" className="">Логин</label>
        <input type="text" id="log" className="" aria-describedby="loginHelp" name="login" />
      </div>
      <div className="">
        <label htmlFor="password" className="">Пароль</label>
        <input type="password" id="password" className="" name="password" />
      </div>
      <button type="submit" className="">Submit-this-shit</button>
    </form>

  );
};
