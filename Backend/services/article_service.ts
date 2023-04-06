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


  public save(bodyParams: any): IArticle {
    const article: IArticle = this.createArticleFromRequest(bodyParams);
    console.log("El Articulo será guardado en la base de datos.")
    return article;
  }
}

export default new ArticleService();