import { Icon } from "app/components";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader__container">
      <Icon icon="Loader" className="loader" width="80px" height="80px" />
    </div>
  );
};
