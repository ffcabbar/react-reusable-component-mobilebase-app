import React from "react";
import ServiceDrawer from "./ServiceDrawer/ServiceDrawer";
import "./HomePage.scss";

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => {
  return (
    <div className="app_wrapper">
      <ServiceDrawer />
    </div>
  );
};

export default HomePage;
