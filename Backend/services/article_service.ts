import Article, { IArticleData, IArticle } from '../models/article';
import articleValidation from "../validations/article_validation";
import { IUploadedFile } from '../models/uploaded_file';
import imageService from './image_service';
import { SortOrder } from 'mongoose';

class ArticleService {

  private createArticleFromRequest(articleData: IArticleData): IArticle {

    try {
      articleValidation.isValid(articleData);
      // Crear una nueva instancia del modelo Article con los datos recibidos
      const newArticle: IArticle = new Article({
        title: articleData.title,
        content: articleData.content,
        image: articleData.image,
        date: new Date()
      });
      return newArticle;
    }catch(error){
      throw new Error('Los datos para el Articulo estan incompletos');
    }
  }


  public async save(articleData: IArticleData): Promise<IArticle> {
    const article: IArticle = this.createArticleFromRequest(articleData);
    console.log("El Articulo será guardado en la base de datos.");
    try {
      await article.save();
      console.log("Articulo guardado exitosamente.");
      return article;
    } catch(error) {
      throw new Error('Error al guardar el articulo en la base de datos.');
    }

  }


  public async all(lastParams: string): Promise<IArticle[]> {
    console.log("Obteniendo la lista de articulos.")
    try {
      const query = Article.find();
      if(articleValidation.isLastParamsValid(lastParams)) query.limit(parseInt(lastParams));

      const articles = await query.sort('-_id');
      console.log("Lista de Articulos obtenida exitosamente.");
      return articles;
    } catch(error) {
      throw new Error('Error al obtener la lista de articulos.');
    }

  }


  public async get(id: string): Promise<IArticle> {
    console.log("Obteniendo el articulo.")
    try {
      articleValidation.isIdValid(id);
      const article = await Article.findById(id);
      if(!article){
        throw new Error(`Articulo con id: ${id} no encontrado.`);
      }

      console.log(`Articulo con id: ${id} obtenida exitosamente.`);
      return article;
    } catch(error) {
      throw error;
    }

  }


  public async update(articleId: string, articleData: IArticleData): Promise<IArticle> {
    console.log("Obteniendo el articulo a actualizar.")
    try {
      articleValidation.isIdValid(articleId);
      articleValidation.isValid(articleData);

      const article = await Article.findOneAndUpdate({_id: articleId}, articleData, {new: true});
      if(!article){
        throw new Error(`Articulo con id: ${articleId} no encontrado.`);
      }

      console.log(`Articulo con id: ${articleId} actualizado exitosamente.`);
      return article;
    } catch(error) {
      throw error;
    }

  }


  public async delete(articleId: string): Promise<IArticle> {
    console.log("Obteniendo el articulo a eliminar.")
    try {
      articleValidation.isIdValid(articleId);

      const article = await Article.findOneAndDelete({_id: articleId});
      if(!article){
        throw new Error(`Articulo con id: ${articleId} no encontrado.`);
      }

      console.log(`Articulo con id: ${articleId} eliminado exitosamente.`);
      return article;
    } catch(error) {
      throw error;
    }
  }


  public async addImage(article: IArticle, uploadedFileList: IUploadedFile[]): Promise<IArticle> {
    console.log("Obteniendo el articulo a para agregar imagen.");
    try {

      const uploadedFile = imageService.conserveFirstImageAndDeleteRest(uploadedFileList);
      await imageService.moveImageToResources(uploadedFile);
      const oldImage = article.image;
      article.image = uploadedFile.filename;
      await imageService.deleteImagefromResources(oldImage);
      await article.save();
      console.log(`Imagen agregada exitosamente a articulo con id: ${article._id}.`);
      return article;
    } catch(error) {
      throw error;
    }

  }


  public async search(search: string): Promise<IArticle[]> {
    console.log(`Buscando Articulos segun critero de búsqueda : '${search}'.`);
    try {
      articleValidation.isSearchParamValid(search);
      const queryOptions = {'$or': [
        {'title': { '$regex': search, '$options': 'i'}},
        {'content': { '$regex': search, '$options': 'i'}}
      ]};
      const sortOptions : [string, SortOrder][] = [['date', 'descending']];
      const articles = await Article.find(queryOptions).sort(sortOptions).exec()

      const numberOfArticleFound = articles.length
      if( numberOfArticleFound== 0)
        throw new Error(`Ningun Articulo coincide con los parametros de busqueda: '${search}'`);
      console.log(`Se encontraron ${numberOfArticleFound} Articulos con el criterio de busqueda: '${search}'.`);
      return articles;
    } catch(error) {
      throw error;
    }

  }

}

export default new ArticleService();