import { SET_TEST_LENGTH } from "app/constants";

export const setLength = (length: number, isShort?: boolean) => {
    return isShort ? {
        type: SET_TEST_LENGTH,
        payload: {
          shortTestLength: length,
        },
    } :
    {
      type: SET_TEST_LENGTH,
      payload: {
        testLength: length,
      },
    };
  };