import React from "react";
import "./DiscountRate.scss";

interface IDiscountRateProps {}

const DiscountRate: React.FC<IDiscountRateProps> = (
  props: IDiscountRateProps
) => {
  return (
    <div className="discount_rate">
      Bu hizmet Şubat ayında <span>%17</span> indirimli!
    </div>
  );
};

export default DiscountRate;
