import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISelectOption {
  category: string;
  label: string;
}

// export interface ISelectProps
//   extends DetailedHTMLProps<
//     HTMLAttributes<HTMLSelectElement>,
//     HTMLSelectElement
//   > {
//   value: string;
//   setValue: (val: string) => void;
//   items: ISelectOption[];
// }

export interface IInputSearchInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
