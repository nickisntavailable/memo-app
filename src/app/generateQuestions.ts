import { FullQuestionType, PersonType, ShortQUestionType } from "./types";

const STOP_WORD = "-";

const getRandom = (list: any[]) => {
  return list[Math.floor(Math.random() * list.length)];
};
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const getNameOptions = (data: PersonType[], breakWord: string) => {
  let options: string[] = [];
  while (options.length < 3) {
    let variant = getRandom(data).name;
    if (variant === breakWord) continue;
    if (options.includes(variant)) continue;
    options.push(variant);
  }
  return [...options, breakWord];
};
const getOptionsFromPossibleVariants = (data: string[], breakWord: string) => {
  let options: string[] = [];
  while (options.length < 3) {
    let variant = getRandom(data);
    if (variant === breakWord) continue;
    if (options.includes(variant)) continue;
    options.push(variant);
  }
  return [...options, breakWord];
};

const generateGeneral = (
  data: PersonType[],
  question1: string,
  question2: string,
  prop_name: keyof PersonType
) => {
  const possibleVariants = (
    [...new Set(data.map((e: PersonType) => e[prop_name]))] as string[]
  ).filter((e) => e !== STOP_WORD);

  const resultArrayFirstType = data.map((person) => {
    if ((person[prop_name] as string) === STOP_WORD) {
      return null;
    }
    let options = getOptionsFromPossibleVariants(
      possibleVariants,
      person[prop_name] as string
    );
    shuffle(options)
    return {
      question: `${question1} ${person.name}?`,
      answer: person[prop_name] as string,
      options,
    };
  });
  
  const resultArraySecondType = data.map((person, _, arr) => {
    if ((person[prop_name] as string) === STOP_WORD) return null;
    let options = getNameOptions(arr, person.name);
    shuffle(options)
    return {
      question: `${question2} ${person[prop_name] as string}?`,
      answer: person.name,
      options,
    };
  });
  return [
    ...resultArrayFirstType.filter((e) => e !== null),
    ...resultArraySecondType.filter((e) => e !== null),
  ];
};

export const generatePhoto = (data: PersonType[]) => {
  const resultArray = data.map((person, _, arr) => {
    let options = getNameOptions(arr, person.name);
    return {
      question: "Как зовут сотрудника, изображенного на фото?",
      photo: person.photo,
      answer: person.name,
      options,
    };
  });
  return resultArray;
};

export const generateQuestions = (data: PersonType[]) => {
  const photoQuestions = generatePhoto(data);
  const questionswork = generateGeneral(
    data,
    "Где раньше работал",
    "Кто из коллег раньше работал в комании",
    "prev_work"
  );
  const questionsSport = generateGeneral(
    data,
    "Каким спортом занимается",
    "Кто из коллег любит этот вид спорта - ",
    "sport"
  );
  const res = [
    ...photoQuestions,
    ...questionswork,
    ...questionsSport,
  ] as FullQuestionType[];
  shuffle(res);
  return res;
};

export const generateQuestionsShort = (data: PersonType[]) => {
  const photoQuestions = generatePhotoShort(data);
  const questionswork = generateGeneralShort(
    data,
    "раньше работал в",
    "раньше работала в",
    "prev_work"
  );
  const questionsSport = generateGeneralShort(
    data,
    "увлекался этим видом спорта -",
    "увлекалась этим видом спорта -",
    "sport"
  );
  const res = [
    ...photoQuestions,
    ...questionswork,
    ...questionsSport,
  ] as ShortQUestionType[];
  shuffle(res);
  return res;
};

function generatePhotoShort(data: PersonType[]): ShortQUestionType[] {
  const result = data.reduce((prev, cur, _, arr): any => {
    const mappedArr = arr.map((p) => {
      const question =
        cur.gender === "м"
          ? `На фото изображен ${cur.name}?`
          : `На фото изображена ${cur.name}?`;
      return p.name === cur.name
        ? { question, photo: cur.photo, answer: false }
        : { question, photo: cur.photo, answer: true };
    });
    return [...prev, ...mappedArr]
  }, [] as ShortQUestionType[]);
  return result;
}
function generateGeneralShort(
  data: PersonType[],
  questionMale: string,
  questionFemale: string,
  prop_name: keyof PersonType
) {
  const possibleVariants = [...new Set(data.map((e) => e[prop_name]))].filter(
    (e) => e !== STOP_WORD
  );
  const result = data.reduce((prev, person): any => {
    const question =
      person.gender === "м"
        ? `${person.name} ${questionMale}`
        : `${person.name} ${questionFemale}`;
    const arr = possibleVariants.map((v) => {
      return v === person[prop_name]
        ? { question: `${question} ${v}?`, answer: true }
        : { question: `${question} ${v}?`, answer: false };
    });
    return [...prev, ...arr];
  }, [] as ShortQUestionType[]);
  return result;
}
