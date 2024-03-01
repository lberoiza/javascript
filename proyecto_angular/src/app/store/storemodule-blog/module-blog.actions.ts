import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";


export const ModuleBlogActions = createActionGroup({
  source: 'ModuleBlog',
  events: {
    'Load All Articles': emptyProps(),
    'Set All Articles': props<{ articles: Article[] }>(),
    'Load All Articles ended': emptyProps(),
  },
})
