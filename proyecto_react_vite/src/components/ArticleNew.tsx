export default function ArticleNew(): JSX.Element {
  return (
    <div className="new-article-form">
      <form action="" className="mid-form">

        <div className="form-group">
          <label htmlFor="title">Agregue el titulo del artículo</label>
          <input type="text" name="title" placeholder="Mi Articulo" />
        </div>

        <div className="form-group">
          <label htmlFor="content" >Agrege el contenido del artículo</label>
          <textarea name="content" placeholder="este articulo trata de..."></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="imagen" >Agrege la imagen del articulo</label>
          <input type="file" name="imagen" />
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
}