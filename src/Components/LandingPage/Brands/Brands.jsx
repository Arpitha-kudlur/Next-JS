import React from "react";
import Image from "next/image";
import "./style.scss";

const BrandsOffered = () => {
  return (
    <>
    
    <div id="brands_container">
    <div className="brand-title-container">
        Brands We Offer
    </div>
    <div className="image-container">

      <img
        src={"./images/Path5.svg"}
        alt="nbcv jsgv"
        width={37}
        height={37}
      />

      <img
        src={"./images/Path6.svg"}
        alt="nbcv jsgv"
        width={30}
        height={37}
      />
      <img
        src={"./images/Path7.svg"}
        alt="nbcv jsgv"
        width={98}
        height={31}
      />

      <img
        src={"./images/Union2.svg"}
        alt="nbcv jsgv"
        width={137}
        height={30}
      />
      <img
        src={"./images/Union1.svg"}
        alt="nbcv jsgv"
        width={102}
        height={20}
      />

      <img src={"./images/Path4.svg"} alt="nbcv jsgv" width={80} height={20} />
    </div>
    </div>
    </>
  );
};

export default BrandsOffered;
