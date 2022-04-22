import {
  SET_COLLEAGUES,
  SET_QUESTIONS,
  SET_QUESTIONS_SHORT,
} from "app/constants";
import { FullQuestionType, PersonType, ShortQUestionType } from "app/types";

interface IAction {
  type: string;
  payload: {
    colleagues?: PersonType[];
    questions?: FullQuestionType[];
    questionsShort?: ShortQUestionType[];
  };
}

const data = (state = [], action: IAction) => {
  switch (action.type) {
    case SET_COLLEAGUES:
      return {
        ...state,
        colleagues: action.payload.colleagues,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };
    case SET_QUESTIONS_SHORT:
      return {
        ...state,
        questionsShort: action.payload.questionsShort,
      };
    default:
      return state;
  }
};
export default data;
