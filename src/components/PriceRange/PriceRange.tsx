import React from "react";
import { IServicePrice } from "../../interfaces/service/service-price";
import "./PriceRange.scss";

interface IPriceRangeProps {
  price: IServicePrice;
}

const PriceRange: React.FC<IPriceRangeProps> = (props: IPriceRangeProps) => {
  return (
    <div className="price_range">
      <div>Ortalama Fiyat aralığı:</div>
      <div>
        {`${props.price.min} - ${props.price.max}`}
        <span>{props.price.currency}</span>
      </div>
    </div>
  );
};

export default PriceRange;
