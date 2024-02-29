import { createReducer, on } from "@ngrx/store";
import { ArticleSearchState } from "@/models/store/ArticleSearchState.model";
import { ModuleSearchActions } from "@/store/storemodule-search/module-search.actions";


const initialState: ArticleSearchState = {
  isLoading: false,
  lastQuery: '',
  lastResults: []
}


export const ModuleSearchReducers = createReducer(
  initialState,
  on(ModuleSearchActions.search, (currentState, {strQuery}) => {
    return {...currentState, isLoading: true, lastQuery: strQuery}
  }),
  on(ModuleSearchActions.searchEnded, (currentState) => {
    return {...currentState, isLoading: false}
  }),
  on(ModuleSearchActions.setResults, (currentState, {results}) => {
    return {...currentState, lastResults: results}
  })


)
