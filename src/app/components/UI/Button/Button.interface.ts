import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IButtonInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearence?: "gradient" | "white" | "secondary" | "primary_red";
  watch?: string;
}
