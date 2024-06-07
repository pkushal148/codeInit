import React from "react";

const InputRowd = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <div className="box">
        <p>CIPHER TEXT</p>
        <h2>{props.cipherText}</h2>
      </div>
      <div className="box">
        <p>KEY</p>
        <h2>{props.Key}</h2>
      </div>
    </div>
  );
};

export default InputRowd;
