import { IArticleData } from '../models/article';
import validator from 'validator';

class ArticleValidation {

  private isTitleValid(title: string): boolean {
    try {
      return !validator.isEmpty(title);
    }catch {
      throw new Error('El titulo del Articulo no pasó la validacion.');
    }
  }

  private isContentValid(content: string): boolean {
    try {
      return !validator.isEmpty(content);
    }catch {
      throw new Error('El Contenido del Articulo no pasó la validacion.');
    }
  }


  public isSearchParamValid(title: string): boolean {
    try {
      return !validator.isEmpty(title);
    }catch {
      throw new Error('El criterio de Busqueda no es Válido.');
    }
  }

  
  public isLastParamsValid(last: string) {
    try {
      return validator.isNumeric(last);
    }catch(error) {
      return false;
    }
  }


  public isIdValid(id: string) {
    if(validator.isMongoId(id)) return true;
    throw new Error('El Id del articulo no es válido.');
  }


  public isValid(articleData: IArticleData): boolean {
    try {
      this.isTitleValid(articleData.title);
      this.isContentValid(articleData.content);
      return true;
    }catch (error) {
      throw error;
    }
  }

}

export default new ArticleValidation();