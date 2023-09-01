import React from "react";

const HomeCardGrid = () => {
  const cardData = [
    {
      cardHeader: "1",
      cardTitle: "Choose your device",
      cardText: "Find your desired tech and optimal rental period. Do you prefer to rent shorter and more flexible or longer and at a lower price?",
      imageUrl: "https://assets.thehansindia.com/h-upload/2022/07/13/1600x960_1302702-gadgets.jpg",
      
    },
    {
      cardHeader: "2",
      cardTitle: "Place your order",
      cardText: "We carry out a credit check. You will receive an email with the result and information about the delivery within 24 hours.",
      imageUrl: "https://i.pcmag.com/imagery/roundups/04nClNoD26VpyH3SOtt3BAp-5..v1606578043.jpg",
    
    },
    {
      cardHeader: "3",
      cardTitle: "Have fun with your tech",
      cardText: "We will deliver your device as soon as possible. After that, you can enjoy your tech for as long as you want.",
      imageUrl: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/05/10/Photos/Opinion/delivery-kPBC--621x414@LiveMint.jpg",
    },
    {
      cardHeader: "4",
      cardTitle: "Back in the cycle",
      cardText: "Returned devices are stripped of all data, cleaned, repaired and rented out again.",
      imageUrl: "https://www.manosverdes.co/wp-content/uploads/2021/02/reciclaje-electronico-beneficios-imagen-destacada.jpg",
    },
  ];

  return (
    <div className="container">
    <h3 className="card-header mb-4 p-3">How its works?</h3>
    <hr />
    
      <div className="row h-100">
        {cardData.map((data, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card h-100 position-relative border-primary">
              <h3 className="card-header">{data.cardHeader}</h3>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{data.cardTitle}</h5>
                <p className="card-text">{data.cardText}</p>
                <img
                  src={data.imageUrl}
                  className="img-fluid mt-auto "
                  alt={`Image for ${data.cardTitle}`}
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};
export default HomeCardGrid;
