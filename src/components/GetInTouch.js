import React from "react";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();
  const handleClicking = () => {
    navigate("/contact");
  };
  return (
    <button className="CgetInTouch Cfilling2" onClick={handleClicking}>
      <div>Get in touch</div>
    </button>
  );
};

export default GetInTouch;
