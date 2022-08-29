import Select, { SingleValue } from "react-select";
import { ISelectInterface, ISelectOption } from "./Select.interface";
import { useEffect } from "react";
import "./Select.scss";
import classNames from "classnames";

export const UISelect = ({
  options = [],
  setValue,
  value = "",
  className,
  ...props
}: ISelectInterface) => {
  const getValue = (): ISelectOption | undefined | string =>
    options ? options.find((item) => item.value === value) : "";

  const handleChange = (newValue: SingleValue<string | ISelectOption>) =>
    setValue((newValue as ISelectOption).value as string);

  return (
    <div {...props} className={classNames("ui-select__block", className)}>
      <Select
        options={options}
        value={getValue()}
        onChange={handleChange}
        styles={{
          option: (provided) => ({
            ...provided,
            color: "white",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "white",
          }),
          input: (provided) => ({
            ...provided,
            color: "white",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "hsl(209 23% 22% / 1)",
            neutral20: "white",
            neutral0: "hsl(207 26% 17% / 1)",
            primary50: "hsl(207 26% 17% / 1)",
          },
        })}
      />
    </div>
  );
};
