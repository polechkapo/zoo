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

          <form data-id={admin.id} className="bord AdmEdit">
            <div className="tar1">
              <div>
                <label htmlFor="log">логин</label>
                <input type="text" id="log" className="" name="login" defaultValue={adminMod.login} />
              </div>
              <div>
                <label htmlFor="pass">пароль</label>
                <input type="password" id="pass" className="" name="pass" defaultValue={adminMod.password} />
              </div>
              <div>
                <label htmlFor="pass1">проверка</label>
                <input type="password" id="pass1" className="" name="pass2" defaultValue={adminMod.password} />
              </div>
              <button type="submit" className="btn">Изменить</button>
            </div>
          </form>
          <p>добавить админа</p>
          <form className="bord addAdmin">
            <div className="tar1">
              <div>
                <label htmlFor="log">логин</label>
                <input type="text" id="log" className="" name="login" placeholder="введите логин" />
              </div>
              <div>
                <label htmlFor="pass">пароль</label>
                <input type="password" id="pass" className="" name="pass" placeholder="введите пароль" />
              </div>
              <div>
                <label htmlFor="pass1">проверка</label>
                <input type="password" id="pass1" className="" name="pass1" placeholder="повтор пароля" />
              </div>
              <button type="submit" className="btn">Добавить</button>
            </div>
          </form>
          <p>список админов</p>
          <div className="bord delAdm">
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
