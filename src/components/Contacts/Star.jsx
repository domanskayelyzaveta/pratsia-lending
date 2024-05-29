// import sprite from "../../assets/sprite.svg";
import sprite from "../../../public/sprite.svg";

const Star = () => {
  return (
    <svg width="8" height="8">
      <use href={`${sprite}#star`} />
    </svg>
  );
};

export default Star;
