import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";

export const ModuleSearchActions = createActionGroup(
  {
    source: 'ModuleSearch',
    events: {
      'Search': props<{ strQuery: string }>(),
      'Set Results': props<{ results: Article[] }>(),
      'Search Ended': emptyProps(),
    },
  }
);
