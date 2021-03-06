import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { IService } from "../../interfaces/service/service";
import DiscountRate from "../DiscountRate/DiscountRate";
import Button from "../lib/Button/Button";
import MultiStepForm from "../MultiStepForm/MultiStepForm";
import PriceRange from "../PriceRange/PriceRange";
import "./Modal.scss";

interface IModalProps {
  title?: string;
  onClose: () => void;
  showModal: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  serviceData?: IService;
}

const Modal: React.FC<IModalProps> = (props: IModalProps) => {
  const [formStep, setFormStep] = useState<number>(1);
  const nodeRef = React.useRef(null);

  useEffect(() => {
    setFormStep(1);
  }, [props.serviceData?.serviceId]);

  const modalTitle = (val: string | undefined) => {
    if (val) {
      if (formStep === 1) {
        return val;
      } else if (formStep === 2) {
        return "%75 TAMAMLANDI";
      } else if (formStep === 3) {
        return "%100 TAMAMLANDI";
      }
    } else {
      return "";
    }
  };

  const progressBar = () => {
    if (formStep === 1) {
      return "33%";
    } else if (formStep === 2) {
      return "66%";
    } else if (formStep === 3) {
      return "100%";
    }
  };

  return (
    <>
      {props.serviceData && (
        <CSSTransition
          in={props.showModal}
          unmountOnExit
          timeout={{ enter: 0, exit: 300 }}
          onEnter={() => props.setShowDrawer(false)}
          onExited={() => props.setShowDrawer(true)}
          nodeRef={nodeRef}
        >
          <div className="modal" onClick={props.onClose} ref={nodeRef}>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
              <div className="modal_header">
                <div
                  className={
                    formStep === 1 ? "modal_header_back_button" : undefined
                  }
                  onClick={() => setFormStep(formStep - 1)}
                >
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.65392 16C8.30964 16 7.96506 15.8789 7.70214 15.6358L0.39423 8.87989C0.142078 8.64649 0 8.33014 0 7.99997C0 7.67006 0.142078 7.35344 0.393931 7.12004L7.70214 0.364398C8.22738 -0.121466 9.07985 -0.121466 9.6051 0.364398C10.1312 0.850539 10.1312 1.6381 9.6051 2.12424L3.24956 7.99997L9.6054 13.8757C10.1315 14.3616 10.1315 15.1494 9.6054 15.6355C9.34278 15.8783 8.9982 16 8.65392 16Z"
                      fill="#111321"
                    />
                  </svg>
                </div>
                <div className="modal_title">
                  {modalTitle(props?.serviceData?.name)}
                </div>
                <div onClick={props.onClose}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5026 6L0.310122 1.80752C-0.103374 1.39403 -0.103374 0.723619 0.310122 0.310122C0.723619 -0.103374 1.39403 -0.103374 1.80752 0.310122L6 4.5026L10.1925 0.310122C10.606 -0.103374 11.2764 -0.103374 11.6899 0.310122C12.1034 0.723619 12.1034 1.39403 11.6899 1.80752L7.4974 6L11.6899 10.1925C12.1034 10.606 12.1034 11.2764 11.6899 11.6899C11.2764 12.1034 10.606 12.1034 10.1925 11.6899L6 7.4974L1.80752 11.6899C1.39403 12.1034 0.723619 12.1034 0.310122 11.6899C-0.103374 11.2764 -0.103374 10.606 0.310122 10.1925L4.5026 6Z"
                      fill="#111321"
                    />
                  </svg>
                </div>
              </div>
              <div className="modal_body">
                <div
                  style={{
                    background: "#2CB34F",
                    height: "3px",
                    borderRadius: "1.5px",
                    width: progressBar(),
                    position: "fixed",
                  }}
                />
                <PriceRange price={props.serviceData.price} />
                {props.serviceData.discountRateText && (
                  <DiscountRate
                    discountRateText={props.serviceData.discountRateText}
                  />
                )}

                <MultiStepForm
                  serviceId={props.serviceData.serviceId}
                  formStep={formStep}
                  setFormStep={setFormStep}
                />
              </div>
              <div className="modal_footer">
                {formStep === 3 ? (
                  <Button>
                    <Link
                      to="/successpage"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      TALEP G??NDER
                    </Link>
                  </Button>
                ) : (
                  <Button onClick={() => setFormStep(formStep + 1)}>
                    DEVAM
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default Modal;
