const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');

module.exports = function AdminCabinet({ tariff, adminMod, allAdmin }) {
  const { admin } = React.useContext(Context);
  return (
    <Layout>
      {admin ? (
        <div className="cab">
          <p>привет Админ</p>
          <p>изменить логин и пароль</p>

          <form className="bord">
            <div className="tar1">
              <div>
                <label htmlFor="log">логин</label>
                <input type="text" id="log" className="" defaultValue={adminMod.login} />
              </div>
              <div>
                <label htmlFor="pass">пароль</label>
                <input type="password" id="pass" className="" defaultValue={adminMod.password} />
              </div>
              <div>
                <label htmlFor="pass1">проверка</label>
                <input type="password" id="pass1" className="" defaultValue={admin.password} />
              </div>
            </div>
          </form>
          <p>добавит админа</p>
          <form className="bord">
            <div className="tar1">
              <div>
                <label htmlFor="log">логин</label>
                <input type="text" id="log" className="" placeholder="введите логин" />
              </div>
              <div>
                <label htmlFor="pass">пароль</label>
                <input type="password" id="pass" className="" placeholder="введите пароль" />
              </div>
              <div>
                <label htmlFor="pass1">проверка</label>
                <input type="password" id="pass1" className="" placeholder="повтор пароля" />
              </div>
            </div>
          </form>
          <p>список админов</p>
          <div className="bord">
            {allAdmin.map((el) => (
              <form>
                <div className="tar">
                  <p>{el.login}</p>
                  <p>
                    <button className="btn-x">X</button>
                  </p>
                </div>
              </form>
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
            <button type="submit" className="btn1">Изменить</button>
            {/* <button type="submit" className="btn2">Добавить</button> */}
          </form>
          <p>добавит зверя</p>
          <form className="bord">
            <div>
              <label htmlFor="log">Имя</label>
              <input type="text" id="log" className="" />
            </div>
            <div>
              <label htmlFor="log">описание</label>
              <input type="text" id="log" className="" />
            </div>
            <div>
              <label htmlFor="log">фото</label>
              <input type="text" id="log" className="" />
            </div>
          </form>
        </div>

      ) : <p>ты не админ</p>}
    </Layout>
  );
};
