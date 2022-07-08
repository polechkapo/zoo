const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');

module.exports = function AdminCabinet({ tariff, adminMod, allAdmin }) {
  const { admin } = React.useContext(Context);
  return (
    <Layout>
      {admin ? (
        <div className="cab">
          <h1>привет, Админ!</h1>
          <div className="form_edit-info">
            <p className="admin-title">Здесь ты можешь изменить свой логин и пароль:</p>
            <form className="bord">
              <label htmlFor="log">Логин:</label>
              <input type="text" id="log" className="" defaultValue={adminMod.login} />
              <label htmlFor="pass">Пароль:</label>
              <input type="password" id="pass" className="" defaultValue={adminMod.password} />
              <label htmlFor="pass1">Проверка:</label>
              <input type="password" id="pass1" className="" defaultValue={admin.password} />
              <button type="submit" className="edit_form-button">Изменить</button>
            </form>
          </div>
          <div className="form_edit-info">
            <p className="admin-title">Здесь ты можешь добавить нового администратора:</p>
            <form className="bord">
              <label htmlFor="log">Логин:</label>
              <input type="text" id="log" className="" placeholder="введите логин" />
              <label htmlFor="pass">Пароль:</label>
              <input type="password" id="pass" className="" placeholder="введите пароль" />
              <label htmlFor="pass1">Проверка:</label>
              <input type="password" id="pass1" className="" placeholder="повтор пароля" />
              <button type="submit" className="edit_form-button">Добавить</button>
            </form>
          </div>
          <p className="admin-title">Список текущих администраторов:</p>
          <div className="bord">
            {allAdmin.map((el) => (
              <form>
                <div className="tar">
                  <p>{el.login}</p>
                  <p>
                    <button className="btn-x">x</button>
                  </p>
                </div>
              </form>
            ))}
          </div>
          <p className="admin-title">Изменить стоимость билетов:</p>
          <form className="tarif-edit bord">
            {tariff.map((el, i) => (
              <div className="tarif" key={i}>
                <div>
                  {i + 1}
                  .
                </div>
                <input type="text" id={`label-${i}`} className="" name={`in1${i}`} defaultValue={el.day_type} />
                <input type="text" id={`label-${i}`} className="" name={`in2${i}`} defaultValue={el.human_type} />
                <input type="number" id={`label-${i}`} className="" name={`in3${i}`} defaultValue={el.price} />
              </div>
            ))}
            <button type="submit" className="edit_form-button">Изменить</button>
            {/* <button type="submit" className="btn2">Добавить</button> */}
          </form>
          <div className="form_edit-info form__add">
            <p className="admin-title">Добавь нового обитателя зоопарка:</p>
            <form className="bord">
                <label htmlFor="log">Его имя:</label>
                <input type="text" id="log" className="" />
                <label htmlFor="log">Его описание:</label>
                <input type="text" id="log" className="" />
                <label htmlFor="log">Его фото:</label>
                <input type="text" id="log" className="" />
                <button type="submit" className="edit_form-button">Изменить</button>
            </form>
          </div>
        </div>
      ) : <p className="admin-title">Ты не администратор, увы</p>}
    </Layout>
  );
};
