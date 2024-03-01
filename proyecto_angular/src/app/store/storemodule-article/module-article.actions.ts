import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";


export const ModuleArticleActions = createActionGroup({
  source: 'ModuleArticle',
  events: {
    'Load Article By Id': props<{ articleId: string }>(),
    'Set Article': props<{ article?: Article }>(),
    'Load Article By Id Ends': emptyProps(),
    'Delete Article By Id': props<{ articleId: string }>(),
    'Delete Article By Id end': emptyProps()
  },
})
