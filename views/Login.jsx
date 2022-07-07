const React = require('react');


module.exports = function Login({ admin }) {
  return (

    <form method="post" action="/auth/login">
      <div className="">
        <label htmlFor="log" className="">Login</label>
        <input type="text" id="log" className="" aria-describedby="loginHelp" name="login" />
      </div>
      <div className="">
        <label htmlFor="password" className="">Password</label>
        <input type="password" id="password" className="" name="password" />
      </div>
      <button type="submit" className="">Submit-this-shit</button>
    </form>

  );
};
