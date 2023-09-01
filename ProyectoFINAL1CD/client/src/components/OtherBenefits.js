import React from "react";
import { ImLoop2, ImCreditCard} from "react-icons/im";
import { FaShippingFast, FaLock, FaCalendar, } from "react-icons/fa";

const OtherBenefits = () => {
  const cardData = [
    { icon: <FaShippingFast />, text: "Free returns" },
    { icon: <ImCreditCard />, text: "No hidden costs" },
    { icon: <FaLock />, text: "Safe removal of data" },
    { icon: <ImLoop2 />, text: "Contribution to the circular economy" },
    { icon: <FaCalendar />, text: "Flexible rental periods" },
   
  ];

  return (
    <div className="container">
      <h5 className="text-center mt-5 text-light">ADDITIONAL ADVANTAGES</h5>
      <p className="text-center">
        Find out how you can rent your favorite tech, what advantages it has
        and how we use fewer resources together.
      </p>
      <hr />

      <div className="row justify-content-center">
        {cardData.map((data, index) => (
          <div key={index} className="col-md-2 mb-4">
            <div className="card text-center border-0 h-100  ">
              <div className="card-body fs-4 mb-4">
                {data.icon}
                <h5 className="card-text mt-4">{data.text}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBenefits;
