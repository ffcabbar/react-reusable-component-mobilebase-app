import React, { useEffect, useState } from "react";
import "./ServiceDrawer.scss";
import serviceData from "../../api/service/services.json";
import { IService } from "../../interfaces/service/service";

const ServiceDrawer: React.FC = () => {
  const [service, setService] = useState<IService[]>([]);

  const getService = () => {
    setService(serviceData);
  };

  useEffect(() => {
    getService();
  }, []);

  console.log(service);
  return (
    <div className="service_drawer_wrapper">
      <div className="service_drawer">
        <div className="service_drawer_header">servisler</div>
        {service.map((item) => {
          return (
            <div key={item.serviceId} className="service_drawer_item">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDrawer;
