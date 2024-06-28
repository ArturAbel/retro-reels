import "./SpinnerItem.css";
export const SpinnerItem = ({image, index}) => {
  return (
    <img
      className={`hero-spinner spinner-${index}`}
      src={image}
      alt='spinner'
    />
  );
};
