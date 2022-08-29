import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: string;
  setValue: (val: string) => void;
  options: ISelectOption[];
}
