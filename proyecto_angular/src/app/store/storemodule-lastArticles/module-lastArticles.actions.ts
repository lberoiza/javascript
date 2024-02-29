import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";

export const ModuleLastArticlesActions = createActionGroup({
  source: "ModuleLastArticles",
  events: {
    'Load Last Articles': emptyProps(),
    'Set Last Articles': props<{ articles: Article[] }>(),
    'Load Last Articles ended': emptyProps(),
  },
})
