import { SET_COLLEAGUES, SET_QUESTIONS } from "app/constants";
import { generateQuestions } from "app/generateQuestions";
import { FullQuestionType } from "app/types";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
export const setData = (colleagues: []) => {
  return {
    type: SET_COLLEAGUES,
    payload: {
      colleagues,
    },
  };
};
export const setQuestions = (questions: FullQuestionType[]) => {
    return {
      type: SET_QUESTIONS,
      payload: {
        questions,
      },
    };
  };

export const getData: any = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const res = await fetch("../data/data.json");
    const data = await res.json();
    console.log(data);

    dispatch(setData(data));
    const questions = generateQuestions(data)
    dispatch(setQuestions(questions))
  };
};



