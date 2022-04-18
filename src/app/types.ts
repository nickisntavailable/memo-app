export type PersonType = {
  name: string;
  gender: string;
  photo: string;
  sport: string;
  prev_work: string;
  hobby?: string;
};
export type FullQuestionType = {
  question: string;
  photo?: string;
  answer: string;
  options: string[];
};
