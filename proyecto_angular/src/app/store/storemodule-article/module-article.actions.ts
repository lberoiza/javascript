import { createActionGroup, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";


export const ModuleArticleActions = createActionGroup({
  source: 'ModuleArticle',
  events: {
    'Set Article': props<{ article: Article }>(),
  },
})
