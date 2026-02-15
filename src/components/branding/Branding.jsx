import React from "react";
import "./branding.scss";
import { forwardRef } from "react";

const brandingData = [
  {
    name: "Seer Logistic",
    category: "Logistics app for delivering products to multiple locations.",
    image: "../SEER logo.png",
  },
  {
    name: "Hooha",
    category: "Astrology Zodiac Dating App A dating platform that matches users based on zodiac",
    image: "../hohalogo.png",
  },
  {
    name: "Neho",
    category: "Finance",
    image: "../nehologo.png",
  },
  {
    name: "Swannlogo",
    category: "Energy",
    image: "../Swannlogo.png",
  },
  {
    name: "Solis",
    category: "Energy",
    image: "../handler.png",
  },
];

const Branding = forwardRef((props, ref) => {
  return (
    <section className="branding">
      <h2 className="title2" ref={ref}>Logos & Branding</h2>

      <div className="branding-scroll">
        {brandingData.map((brand, index) => (
          <div className="branding-card" key={index}>
            <div className="logo-box">
              <img src={brand.image} alt={brand.name} />
            </div>
            <div className="brand-info">
              <h4>{brand.name}</h4>
              <p>{brand.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Branding;
