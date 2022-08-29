import cn from "classnames";
import { Link, useMatch } from "react-router-dom";
import { ICustomLinkinterface } from "./CustomLink.interface";
import "./CustomLink.scss";

export const CustomLink = ({
  to,
  className,
  children,
  ...props
}: ICustomLinkinterface): JSX.Element => {
  const match = useMatch(to as string);
  return (
    <Link
      to={to}
      className={cn("link", className, {
        "link-active": match,
      })}
      {...props}
    >
      {children}
    </Link>
  );
};
