import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "app/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { FullQuestionType, PersonType, ShortQUestionType } from "./types";

const initialState = {
  data: {
      colleagues: [],
      questions: []
  }
};
export type RootState = {
  data: {
    colleagues: PersonType[],
    questions: FullQuestionType[]
    questionsShort: ShortQUestionType[]
}
}

const configureStore = (preloadedStore: {}) =>
  createStore(rootReducer, preloadedStore, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore(initialState);


export default store;
