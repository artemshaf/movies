import ReactStars from "react-rating-stars-component";
import { Icon } from "../Icon";

export const Rating = ({ rating, edit = false, className = "" }) => {
  return (
    <ReactStars
      value={Math.round(rating)}
      edit={edit}
      count={10}
      className={className}
      emptyIcon={<Icon icon="StarStroke" width="16px" />}
      filledIcon={<Icon icon="StarFill" width="16px" />}
    />
  );
};
