const React = require('react');
const Layout = require('./Layout');

module.exports = function EditCard({ animal }) {
  return (
    <Layout>
      <div className="edit__container">
        <h1 className="edit__title">Давай изменим нашу карточку!</h1>
        <form className="editForm" name="editForm" id={`${animal.id}`}>
          <label htmlFor="inputName">Название животного</label>
          <input type="text" name="inputName" defaultValue={`${animal.name}`} />
          <label htmlFor="inputDesc">Описание животного</label>
          <textarea type="text" name="inputDesc" className="inputEdit" defaultValue={`${animal.desc}`} />
          <button type="submit" className="edit_form-button">Изменить</button>
        </form>
      </div>
    </Layout>
  );
};

/* <form method="post" action={`${animal.id}/upload`} encType="multipart/form-data" name="uploadPhoto" id={`${animal.id}`}>
        <input type="file" id={`${animal.id}`} name="inputFile" />
        <input type="submit" value="Загрузить фото" />
      </form> */
