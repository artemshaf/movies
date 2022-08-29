import { Icon } from "app/components";
import "./Loader.scss";

export const NotSearch = () => {
  return (
    <div className="loader__container">
      <h1 className="not-search">По вашему запросу ничего не найдено!</h1>
      <Icon icon="Close" className="not-search" width="80px" height="80px" />
    </div>
  );
};
