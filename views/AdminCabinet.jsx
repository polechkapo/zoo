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
            <form data-id={admin.id} className="bord AdmEdit">
              <label htmlFor="log">Логин:</label>
              <input type="text" id="log" className="" name="login" defaultValue={adminMod.login} />
              <label htmlFor="pass">Пароль:</label>
              <input type="password" id="pass" className="" name="pas" defaultValue={adminMod.password} />
              <label htmlFor="pass1">Проверка:</label>
              <input type="password" id="pass1" className="" name="pass2" defaultValue={admin.password} />
              <button type="submit" className="edit_form-button">Изменить</button>
            </form>
          </div>
          <p className="admin-title">Здесь ты можешь добавить нового администратора:</p>
          <form className="bord addAdmin">
            <label htmlFor="log">Логин:</label>
            <input type="text" id="log" className="" name="login" placeholder="введите логин" />
            <label htmlFor="pass">Пароль:</label>
            <input type="password" id="pass" className="" name="pas" placeholder="введите пароль" />
            <label htmlFor="pass1">Проверка:</label>
            <input type="password" id="pass1" className="" name="pass2" placeholder="повтор пароля" />
            <button type="submit" className="edit_form-button">Добавить</button>
          </form>
          <p className="admin-title">Список текущих администраторов:</p>
          <div className="bord delAdm">
            {allAdmin.map((el) => (

              <div className="tar">
                <p>{el.login}</p>
                <p>
                  <a href="/" data-id={el.id} className="btn-x">X</a>
                </p>
              </div>

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
          </form>
          <div className="form_edit-info form__add">
            <p className="admin-title">Добавь нового обитателя зоопарка:</p>
            <form className="bord addAnimals">
              <label htmlFor="log">Его имя:</label>
              <input type="text" id="log" name="name" className="" />
              <label htmlFor="log">Его описание:</label>
              <input type="text" id="log" name="desc" className="" />
              <label htmlFor="log">Его фото:</label>
              <input type="text" id="log" name="photo1" className="" />
              <label htmlFor="log">Его фото:</label>
              <input type="text" id="log" name="photo1" className="" />
              <label htmlFor="log">Его фото:</label>
              <input type="text" id="log" name="photo3" className="" />
              <button type="submit" className="edit_form-button">Добавить</button>
            </form>
          </div>
        </div>
      ) : <p className="admin-title">Ты не администратор, увы</p>}
    </Layout>
  );
};
