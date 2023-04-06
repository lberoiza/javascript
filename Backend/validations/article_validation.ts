import validator from 'validator';

class ArticleValidation {

  private isTitleValid(title: string): boolean {
    return !validator.isEmpty(title);
  }

  private isContentValid(content: string): boolean {
    return !validator.isEmpty(content);
  }

  public isValid(title: string, content: string, imageUrl: string): boolean {
    return this.isTitleValid(title) && this.isContentValid(content);
  }
}

export default new ArticleValidation();