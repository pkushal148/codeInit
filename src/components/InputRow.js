import React from "react";

const InputRow = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <div className="box">
        <p>PLAIN TEXT</p>
        <h2>{props.plainText}</h2>
      </div>
      <div className="box">
        <p>KEY</p>
        <h2>{props.Key}</h2>
      </div>
    </div>
  );
};

export default InputRow;
