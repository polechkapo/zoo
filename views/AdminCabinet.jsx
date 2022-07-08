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
            <p>Здесь ты можешь изменить свой логин и пароль:</p>
            <form className="bord">
              <label htmlFor="log">Логин:</label>
              <input type="text" id="log" className="" defaultValue={adminMod.login} />
              <label htmlFor="pass">Пароль:</label>
              <input type="password" id="pass" className="" defaultValue={adminMod.password} />
              <label htmlFor="pass1">Проверка:</label>
              <input type="password" id="pass1" className="" defaultValue={admin.password} />
              <button type='submit' className='edit_form-button'>Изменить</button>
            </form>
          </div>
          <p className='admin-title'>Здесь ты можешь добавить нового администратора:</p>
          <form className="bord">
                <label htmlFor="log">Логин:</label>
                <input type="text" id="log" className="" placeholder="введите логин" />
                <label htmlFor="pass">Пароль:</label>
                <input type="password" id="pass" className="" placeholder="введите пароль" />
                <label htmlFor="pass1">Проверка:</label>
                <input type="password" id="pass1" className="" placeholder="повтор пароля" />
                <button type='submit' className='edit_form-button'>Добавить</button>
          </form>
          <p className='admin-title'>Список текущих администраторов:</p>
          <div className="bord">
            {allAdmin.map((el) => (

              <div className="tar delAdm1">
                <p>{el.login}</p>

                <a href="/" data-id={el.id} className="btn-x">X</a>

              </div>
            ))}
          </div>
          <p>Изменить тарифный план</p>
          <form className="tarif-edit bord">
            {tariff.map((el, i) => (
              <div className="tar" key={i}>
                <div>{i + 1}</div>
                <div className="">
                  <input type="text" id={`label-${i}`} className="" name={`in1${i}`} defaultValue={el.day_type} />
                </div>
                <div className="">
                  <input type="text" id={`label-${i}`} className="" name={`in2${i}`} defaultValue={el.human_type} />
                </div>
                <div className="">
                  <input type="number" id={`label-${i}`} className="" name={`in3${i}`} defaultValue={el.price} />
                </div>
              </div>
            ))}
            <button type="submit" className="btn">Изменить</button>
            {/* <button type="submit" className="btn2">Добавить</button> */}
          </form>
          <p>добавит зверя</p>
          <form className="bord addAnimals">
            <div>
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" className="" />
            </div>
            <div>
              <label htmlFor="desc">описание</label>
              <input type="text" id="desc" name="desc" className="" />
            </div>
            <div>
              <label htmlFor="photo1">фото</label>
              <input type="text" id="photo1" name="photo1" className="" />
            </div>
            <div>
              <label htmlFor="photo2">фото</label>
              <input type="text" id="photo2" name="photo2" className="" />
            </div>
            <div>
              <label htmlFor="photo3">фото</label>
              <input type="text" id="photo3" name="photo3" className="" />
            </div>
            <button type="submit" className="btn">Добавить</button>
          </form>
        </div>
      ) : <p>ты не админ</p>}
    </Layout>
  );
};
