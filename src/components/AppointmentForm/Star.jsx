import sprite from "../../assets/sprite.svg";

const Star = () => {
  return (
    <svg width="6" height="6" fill="var(--blue-200)">
      <use href={`${sprite}#star`} />
    </svg>
  );
};

export default Star;
