import "./SpinnerItem.css";

export const SpinnerItem = ({image, index}) => {
  return (
    <img
      className={`spinner spinner-${index}`}
      src={image}
      alt='pin'
    />
  );
};
