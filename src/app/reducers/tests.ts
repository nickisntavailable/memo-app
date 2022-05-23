import { SET_TEST_LENGTH } from "app/constants";

interface IAction {
  type: string;
  payload: {
    testLength?: number;
    shortTestLength?: number;
  };
}

const tests = (state = [], action: IAction) => {
  switch (action.type) {
    case SET_TEST_LENGTH: {
        
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
export default tests;
