export interface Article {
  _id: string,
  title: string,
  content: string,
  date: string,
  image: string,
  __v: number
}

export const createEmptyArticle = (): Article => {
  return {
    _id: '',
    title: '',
    content: '',
    date: '',
    image: '',
    __v: 0
  }
}

export interface ArticleFormFields {
  title: string,
  content: string
  imageFile?: File
}

export const createArticleFormFieldsOf = (article: Article): ArticleFormFields => {
  return {
    title: article.title,
    content: article.content
  }
}
