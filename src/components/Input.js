import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          {props.label}
        </label>
        <input
          type="text"
          className="form-control textInput"
          id="exampleFormControlInput1"
          placeholder={props.label}
        />
      </div>
    </>
  );
};

export default Input;
