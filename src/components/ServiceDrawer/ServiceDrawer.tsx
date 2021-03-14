import React, { useEffect, useState } from "react";
import "./ServiceDrawer.scss";
import serviceData from "../../api/service/services.json";
import { IService } from "../../interfaces/service/service";
import Modal from "../Modal/Modal";

const ServiceDrawer: React.FC = () => {
  const [service, setService] = useState<IService[]>([]);
  const [sendServiceData, setSendServiceData] = useState<IService>(
    {} as IService
  );
  const [showDrawer, setShowDrawer] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const getService = () => {
    setService(serviceData);
  };

  useEffect(() => {
    // Imagine like get api request from service
    getService();
  }, []);

  const handleServiceDrawer = (data: IService) => {
    setSendServiceData(data);
    setShowModal(true);
  };

  return (
    <>
      <Modal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        setShowDrawer={setShowDrawer}
        serviceData={sendServiceData}
      />

      {showDrawer && (
        <div className="service_drawer_wrapper">
          <div className="service_drawer">
            <div className="service_drawer_header">servisler</div>
            {service.map((item) => {
              return (
                <div
                  key={item.serviceId}
                  className="service_drawer_item"
                  onClick={() => handleServiceDrawer(item)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDrawer;
