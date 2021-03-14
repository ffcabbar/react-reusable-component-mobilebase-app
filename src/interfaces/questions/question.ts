import { IQuestionValues } from "./question-values";

export interface IQuestion {
  id: number;
  typeId: number;
  serviceId: number;
  label: string;
  required: boolean;
  pageNumber: number;
  values: IQuestionValues[] | null;
  placeHolder: string | null;
  description: string | null;
}
