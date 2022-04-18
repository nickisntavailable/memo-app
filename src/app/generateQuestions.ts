import { FullQuestionType, PersonType } from "./types";

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
  let options = [];
  while (options.length < 3) {
    let variant = getRandom(data).name;
    if (variant === breakWord) continue;
    options.push(variant);
  }
  return [...options, breakWord];
};
const getOptionsFromPossibleVariants = (data: string[], breakWord: string) => {
  let options = [];
  while (options.length < 3) {
    let variant = getRandom(data);
    if (variant === breakWord) continue;
    options.push(variant);
  }
  return [...options, breakWord];
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
  ] as FullQuestionType[]
  shuffle(res)
  return res;
};

const generateGeneral = (
  data: PersonType[],
  question1: string,
  question2: string,
  prop_name: keyof PersonType
) => {
  const possibleVariants = [
    ...new Set(data.map((e: PersonType) => e[prop_name])),
  ] as string[];
  const resultArrayFirstType = data.map((person) => {
    if ((person[prop_name] as string) === "-") return null;
    let options = getOptionsFromPossibleVariants(
      possibleVariants,
      person[prop_name] as string
    );
    return {
      question: `${question1} ${person.name}?`,
      answer: person[prop_name] as string,
      options,
    };
  });
  const resultArraySecondType = data.map((person, _, arr) => {
    if ((person[prop_name] as string) === "-") return null;
    let options = getNameOptions(arr, person.name);
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
