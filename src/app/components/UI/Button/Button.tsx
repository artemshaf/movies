import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { IButtonInterface } from "./Button.interface";
import "./Button.scss";

export const Button = ({
  appearence = "gradient",
  watch,
  children,
  className,
  ...props
}: IButtonInterface) => {
  const navigate = useNavigate();

  return (
    <button
      className={cn(className, "button")}
      {...props}
      onClick={() => {
        if (watch) {
          navigate(watch);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
