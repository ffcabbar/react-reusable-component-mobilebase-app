import React from "react";
import "./DiscountRate.scss";

interface IDiscountRateProps {
  discountRateText: string;
}

const DiscountRate: React.FC<IDiscountRateProps> = (
  props: IDiscountRateProps
) => {
  let indexOf = props?.discountRateText.indexOf("%");
  let discountRate = props?.discountRateText.slice(indexOf, indexOf + 3);
  const discountArray = props?.discountRateText.split(discountRate);
  let tempArray = [...discountArray];
  const firstPart = tempArray.shift();
  const secondPart = tempArray.pop();

  return (
    <div className="discount_rate">
      {firstPart} <span>{discountRate}</span> {secondPart}
    </div>
  );
};

export default DiscountRate;
