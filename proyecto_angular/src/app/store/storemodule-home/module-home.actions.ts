import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";

export const ModuleHomeActions = createActionGroup({
  source: "ModuleHome",
  events: {
    'Load Last Articles': emptyProps(),
    'Set Last Articles': props<{ articles: Article[] }>(),
    'Load Last Articles ended': emptyProps(),
  },
})
