import { SET_COLLEAGUES, SET_QUESTIONS, SET_QUESTIONS_SHORT } from "app/constants";
import { generateQuestions, generateQuestionsShort } from "app/generateQuestions";
import { FullQuestionType, ShortQUestionType } from "app/types";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

const API_URL = "../data/data.json"

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
  export const setQuestionsShort = (questionsShort: ShortQUestionType[]) => {
    return {
      type: SET_QUESTIONS_SHORT,
      payload: {
        questionsShort,
      },
    };
  };

export const getData: any = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    dispatch(setData(data));
    const questions = generateQuestions(data)
    dispatch(setQuestions(questions))
    const questionsShort = generateQuestionsShort(data)
    dispatch(setQuestionsShort(questionsShort))
  };
};





