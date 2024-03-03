import { createReducer, on } from "@ngrx/store";
import { SearchState } from "@/models/store/ModuleSearch.model";
import { ModuleSearchActions } from "@/store/storemodule-search/module-search.actions";


const initialState: SearchState = {
  isLoading: false,
  query: '',
  results: []
}


export const ModuleSearchReducers = createReducer(
  initialState,
  on(ModuleSearchActions.search, (currentState, {strQuery}) => {
    return {...currentState, isLoading: true, query: strQuery}
  }),
  on(ModuleSearchActions.searchEnded, (currentState) => {
    return {...currentState, isLoading: false}
  }),
  on(ModuleSearchActions.setResults, (currentState, {results}) => {
    return {...currentState, results: results}
  })
)
