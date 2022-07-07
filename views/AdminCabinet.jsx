const React = require('react');
const Layout = require('./Layout');

module.exports = function AdminCabinet({ tariff }) {
  return (
    <Layout>
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
    </Layout>
  );
};
