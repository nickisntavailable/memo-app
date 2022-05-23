import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "app/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { FullQuestionType, PersonType, ShortQUestionType } from "./types";

const initialState = {
  data: {
    colleagues: [],
    questions: [],
  },
  tests: {
    testLength: 10,
    shortTestLength: 10
  }
};
export type RootState = {
  data: {
    colleagues: PersonType[];
    questions: FullQuestionType[];
    questionsShort: ShortQUestionType[];
  };
  tests: {
    testLength: number,
    shortTestLength: number
  }
};

const configureStore = (preloadedStore: {}) =>
  createStore(
    rootReducer,
    preloadedStore,
    composeWithDevTools(applyMiddleware(thunk))
  );

const store = configureStore(initialState);

export default store;
