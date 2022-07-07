const React = require('react');
const Layout = require('./Layout');

module.exports = function EditCard({ animal }) {
  return (
    <Layout>
      <form action="put" name="editForm" id={`${animal.id}`}>
        <p>картинки</p>
        <label htmlFor="inputName">Название животного</label>
        <input type="text" name="inputName" defaultValue={`${animal.name}`} />
        <label htmlFor="inputDesc">Описание животного</label>
        <input type="text" name="inputDesc" defaultValue={`${animal.desc}`} />
        <button type="submit">Изменить</button>
      </form>
    </Layout>
  );
};
