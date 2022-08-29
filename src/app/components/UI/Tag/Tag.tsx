import cn from "classnames";
import { ITagInterface } from "./Tag.interface";
import "./Tag.scss";

export const Tag = ({ className, children, ...props }: ITagInterface) => {
  return (
    <span className={cn(className, "tag")} {...props}>
      {children}
    </span>
  );
};
