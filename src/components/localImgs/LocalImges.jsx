import { memo } from "react";

const LocalImages = ({ files }) => {
  return (
    <div>
      {Object.values(files).map((el, inx) => (
        <img src={URL.createObjectURL(el)} width={100} key={inx} alt="" />
      ))}
    </div>
  );
};
export default memo(LocalImages);
