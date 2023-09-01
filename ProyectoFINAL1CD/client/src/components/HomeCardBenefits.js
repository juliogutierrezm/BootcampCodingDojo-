import React from "react";
import BenefitCard1 from '../images/BenefitCard1.png';
import BenefitCard2 from '../images/BenefitCard2.png'; 
import BenefitCard3 from '../images/BenefitCard3.png'; 
import BenefitCard4 from '../images/BenefitCard4.png'; 


const HomeCardBenefits = () => {
  const cardData = [
    {
      cardHeader: "",
      cardTitle: "Low monthly prices",
      cardText: "No high acquisition costs, no long-term financing. Thanks to lower monthly prices, you can afford better devices.",
      imageUrl: BenefitCard1,
      
    },
    {
      cardHeader: "",
      cardTitle: "Get the latest tech",
      cardText: "Get new models as soon as they are on the market - and rent until a new release is due next year.",
      imageUrl: BenefitCard2,
    
    },
    {
      cardHeader: "",
      cardTitle: "Less possessions and garbage",
      cardText: "Devices that remain in circulation are used more often and for longer. As a result, they are less likely to end up in a drawer or as electronic waste.",
      imageUrl: BenefitCard3,
    },
    {
      cardHeader: "",
      cardTitle: "Rent as long as you want",
      cardText: "1 month, 3 months, 6 months or 1 year? You can then continue to rent at the previous price or send the device back free of charge. Extend to a cheaper rental period at any time.",
      imageUrl: BenefitCard4,
    },


  ];

  return (
    <div className="container">
      <h2 className="card-header text-center text-light">USE INSTEAD OF BUY</h2>
      <h3 className="card-header mb-4 p-3 text-center">
      That's why renting is better</h3>
      <hr />



      <div className="row justify-content-center">
        {cardData.map((data, index) => (
          <div key={index} className="col-md-4 mb-4 ">
            <div className="card h-100 position-relative border-primary">
              <div className="card-body d-flex flex-column">
                <img
                  src={data.imageUrl}
                  alt={`Image for ${data.cardTitle}`}
                  className="img-fluid align-self-center"
                  style={{ maxHeight: "100px" }} // Ajusta el tamaño de la imagen
                />
                <h5 className="card-title mt-4 text-center">{data.cardTitle}</h5>
                <p className="card-text">{data.cardText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeCardBenefits;