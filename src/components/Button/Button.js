import React from "react";
import styled from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div className={styled.ButtonContainer}>
      <button className={styled.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
