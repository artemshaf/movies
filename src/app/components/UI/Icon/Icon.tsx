import cn from "classnames";
import { icons, IIconInterface } from "./Icon.interface";
import "./Icon.scss";

export const Icon = ({
  width,
  height,
  icon,
  className,
  ...props
}: IIconInterface) => {
  const CurrentIcon = icons[icon];

  return (
    <>
      <CurrentIcon
        className={cn(className, "icon")}
        style={{ width, height }}
        {...props}
      />
    </>
  );
};

export default Icon;
