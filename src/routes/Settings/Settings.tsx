import { setLength } from "app/actions/actionTests";
import { MAX_TEST_LENGTH, MIN_TEST_LENGTH } from "app/constants";
import { RootState } from "app/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Settings.scss";

const Settings = () => {
  const testLengthStore = useSelector<RootState>(
    (state) => state.tests.testLength
  ) as number;
  const [testLength, setTestLength] = useState(testLengthStore);
  let refLongTest = useRef<number>(0);
  const shortTestLengthStore = useSelector<RootState>(
    (state) => state.tests.shortTestLength
  ) as number;
  const [shortTestLength, setShortTestLength] = useState(shortTestLengthStore);
  let refShortTest = useRef<number>(0);
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false)


  useEffect(() => {
    if (testLengthStore) {
      setTestLength(testLengthStore);
    }
  }, [testLengthStore]);
  const handleTestLength = (
    e: React.ChangeEvent<HTMLInputElement>,
    isShort?: boolean
  ) => {
    if (isShort) {
      window.clearTimeout(refShortTest.current);
      setShortTestLength(+e.target.value);
      refShortTest.current = window.setTimeout(
        () => {
            dispatch(setLength(+e.target.value, isShort))
            setIsSaved(true)
            window.setTimeout(() => setIsSaved(false), 1000)
        },
        500
      );
      
    } else {
      window.clearTimeout(refLongTest.current);
      setTestLength(+e.target.value);
      refLongTest.current = window.setTimeout(
        () => {
            dispatch(setLength(+e.target.value))
            setIsSaved(true)
            window.setTimeout(() => setIsSaved(false), 1000)
        },
        500
      );
    }
  };
  return (
    <div className="container-sm settings">
      <div className="settings_group">
        <p className="settings_group_title">Настроить длинну теста с 4 вариантами ответов:</p>
        <input
          type="range"
          value={testLength}
          min={MIN_TEST_LENGTH}
          max={MAX_TEST_LENGTH}
          onChange={(e) => handleTestLength(e)}
        />
        <p className="settings_group_count">{testLength}</p>
      </div>
      <div className="settings_group">
        <p className="settings_group_title">Настроить длинну теста с 2 вариантами ответов:</p>
        <input
          type="range"
          value={shortTestLength}
          min={MIN_TEST_LENGTH}
          max={MAX_TEST_LENGTH}
          onChange={(e) => handleTestLength(e, true)}
        />
        <p className="settings_group_count">{shortTestLength}</p>
      </div>
      <p className={`settings_saved ${isSaved && "active"}`}>Изменения созранены</p>
    </div>
  );
};

export default Settings;
