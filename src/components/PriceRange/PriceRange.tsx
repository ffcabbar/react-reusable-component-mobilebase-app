import React from "react";
import "./PriceRange.scss";

interface IPriceRangeProps {}

const PriceRange: React.FC<IPriceRangeProps> = (props: IPriceRangeProps) => {
  return (
    <div className="price_range">
      <div>Ortalama Fiyat aralığı:</div>
      <div>
        100 - 1.000 <span>TL</span>
      </div>
    </div>
  );
};

export default PriceRange;
