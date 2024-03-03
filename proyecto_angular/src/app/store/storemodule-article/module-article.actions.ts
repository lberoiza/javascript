import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Article } from "@/models/Article.model";


export interface ActionLoadArticleByIdParams {
  articleId: string,
  onError: () => void
}

export interface ActionDeleteParams {
  articleId: string,
  onSuccess: (article: Article) => void,
  onError: () => void
}



export const ModuleArticleActions = createActionGroup({
  source: 'ModuleArticle',
  events: {
    'Load Article By Id': props<ActionLoadArticleByIdParams>(),
    'Set Article': props<{ article?: Article }>(),
    'Load Article By Id Ends': emptyProps(),
    'Delete Article By Id': props<ActionDeleteParams>(),
    'Delete Article By Id end': props<{success: boolean}>()
  },
})
