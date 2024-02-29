import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";


export const ModuleAllArticlesActions = createActionGroup({
  source: 'ModuleAllArticles',
  events: {
    'Load All Articles': emptyProps(),
    'Set Articles': props<{ articles: Article[] }>(),
    'Load All Articles ended': emptyProps(),
  },
})
