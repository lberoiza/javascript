import validator from 'validator';

class ArticleValidation {

  private isTitleValid(title: string): boolean {
    return !validator.isEmpty(title);
  }

  private isContentValid(content: string): boolean {
    return !validator.isEmpty(content);
  }


  public isLastParamsValid(last: string) {
    return validator.isNumeric(last);
  }

  public isIdValid(id: string) {
    if(validator.isMongoId(id)) {
      return true;
    }
    throw new Error('El Id del articulo no es válido');
  }

  public isValid(title: string, content: string, imageUrl: string): boolean {
    return this.isTitleValid(title) && this.isContentValid(content);
  }

}

export default new ArticleValidation();