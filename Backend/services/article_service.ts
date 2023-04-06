import Article, { IArticle } from '../models/article';
import articleValidation from "../validations/article_validation";

class ArticleService {

  private createArticleFromRequest(bodyParams: any): IArticle {

    const { title, content, image } = bodyParams;
    try {
      articleValidation.isValid(title, content, image)
      // Crear una nueva instancia del modelo Article con los datos recibidos
      const newArticle: IArticle = new Article({
        title,
        content,
        image,
        date: new Date()
      });
      return newArticle
    }catch(error){
      throw new Error('Los datos para el Articulo estan incompletos');
    }
  }


  public async save(bodyParams: any): Promise<IArticle> {
    const article: IArticle = this.createArticleFromRequest(bodyParams);
    console.log("El Articulo será guardado en la base de datos.")
    try {
      await article.save();
      console.log("Articulo guardado exitosamente.")
      return article;
    } catch(error) {
      throw new Error('Error al guardar el articulo en la base de datos.')
    }

  }


  public async all(getParams: any): Promise<IArticle[]> {
    console.log("Obteniendo la lista de articulos.")
    try {
      const lastParams: string = getParams.last;

      const query = Article.find();
      if(articleValidation.isValidLastParams(lastParams)) query.limit(parseInt(lastParams));

      const articles = await query.sort('-_id');
      console.log("Lista de Articulos obtenida exitosamente.")
      return articles;
    } catch(error) {
      throw new Error('Error al obtener la lista de articulos.')
    }

  }


}

export default new ArticleService();