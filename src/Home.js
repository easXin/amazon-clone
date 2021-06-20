import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-prime"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="123"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61JXy23DuFL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="456"
            title="This is a testing product"
            image="https://m.media-amazon.com/images/I/51BNckWotKL._AC_SY400_.jpg"
            price={123.2}
            rating={3}
          />
          <Product
            id="789"
            title="REVLON One-Step Hair Dryer"
            price={44.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41yn8u3qJPL._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="098"
            title="iRobot Roomba 694 Robot Vacuum"
            price={229.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41fVJAzcNBL._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
            rating={5}
          />
          <Product
            id="765"
            title="Sony X950H 75-inch TV"
            price={1988.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41oEuBvfP8L._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
            rating={2}
          />
          <Product
            id="432"
            title="SAMSUNG 85-Inch Class QLED"
            price={2797.99}
            image="https://images-na.ssl-images-amazon.com/images/I/412iN3N1R2L._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="134"
            title="Etekcity Lantern Camping Lantern "
            price={14.44}
            image="https://images-na.ssl-images-amazon.com/images/I/41MZfJC2KkL._SX320_QL100_AC_SCLZZZZZZZ_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
