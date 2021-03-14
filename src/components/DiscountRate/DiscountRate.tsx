import React from "react";
import "./DiscountRate.scss";

interface IDiscountRateProps {
  discountRateText: string;
}

const DiscountRate: React.FC<IDiscountRateProps> = (
  props: IDiscountRateProps
) => {
  return <div className="discount_rate">{props.discountRateText}</div>;
};

export default DiscountRate;
