// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";

const Header = ({ text1, text2, text3 }) => {
  return (
    <header>
      <title>{text1}</title>
      <h5>{text2}</h5>
      <p style={{ color: "orange" }}>{text3}</p>
    </header>
  );
};

export default Header;
