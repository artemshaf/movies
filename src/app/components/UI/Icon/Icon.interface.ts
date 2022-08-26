import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ReactComponent as ArrowTop } from "./svgs/arrow-top.svg"; // !!!! not exist

export const icons = {
  ArrowTop,
};

export type IconNames = keyof typeof icons;

export interface IIconInterface
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  icon: IconNames;
  width?: string;
  height?: string;
}
