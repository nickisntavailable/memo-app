import { SET_COLLEAGUES, SET_QUESTIONS } from "app/constants";
import { FullQuestionType, PersonType } from "app/types";

interface IAction {
    type: string
    payload: {
        colleagues?: PersonType[]
        questions?: FullQuestionType[]
    }
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
    default:
      return state;
  }
};
export default data;
