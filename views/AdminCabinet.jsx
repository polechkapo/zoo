const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/ssr');

module.exports = function AdminCabinet({ tariff }) {
  const { admin } = React.useContext(Context);
  return (
    <Layout>
      {admin ? (
        <div className="cab">
          <p>привет Админ</p>
          <p>{tariff[0].day_type}</p>
          <form>
            {tariff.map((el, i) => (
              <div className="" key={i}>
                <label htmlFor={`label-${i}`} className="" />
                <input type="text" id={`label-${i}`} className="" name={`input${i}`} defaultValue={el.price} />
              </div>
            ))}
          </form>
        </div>
      ) : <p>ты не админ</p>}
    </Layout>
  );
};
