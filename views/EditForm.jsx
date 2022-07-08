const React = require('react');
const Layout = require('./Layout');

module.exports = function EditCard({ animal }) {
  return (
    <Layout>
      <form method="PUT" name="editForm" id={`${animal.id}`}>
        <label htmlFor="inputName">Название животного</label>
        <input type="text" name="inputName" defaultValue={`${animal.name}`} />
        <label htmlFor="inputDesc">Описание животного</label>
        <input type="text" name="inputDesc" defaultValue={`${animal.desc}`} />
        <button type="submit">Изменить</button>
      </form>
    </Layout>
  );
};

/* <form method="post" action={`${animal.id}/upload`} encType="multipart/form-data" name="uploadPhoto" id={`${animal.id}`}>
        <input type="file" id={`${animal.id}`} name="inputFile" />
        <input type="submit" value="Загрузить фото" />
      </form> */