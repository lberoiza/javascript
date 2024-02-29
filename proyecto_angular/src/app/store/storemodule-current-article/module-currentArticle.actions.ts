import { createActionGroup, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";


export const ModuleCurrentArticleActions = createActionGroup({
  source: 'ModuleCurrentArticle',
  events: {
    'Set Current Article': props<{ article: Article }>(),
  },
})
