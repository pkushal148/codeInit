import React from "react";
import Titles from "./Titles";
import InputRow from "./InputRow";
import { Link } from "react-router-dom";

const CreateGrid = () => {
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText="kushal" Key="key" />
      <div>
        <h3 className="m-4">STEP 2 : CREATING GRID</h3>
        <ul>
          <li>
            Create a 5X5 grid and fill the updated Encryption key in left to
            right and top to bottom order.
          </li>
        </ul>
        <div className="container text-center grid">
          <div className="row">
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
          </div>
          <div className="row">
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
          </div>
          <div className="row">
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
          </div>
          <div className="row">
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
          </div>
          <div className="row">
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
            <div className="col cell">G</div>
          </div>
        </div>
      </div>
      <Link className="btn m-2 next" to="/encrypt/fill-grid" role="button">
        Next
      </Link>
      <Link
        className="btn m-2 prev"
        to="/encrypt/remove-duplicates"
        role="button"
      >
        Previous
      </Link>
    </div>
  );
};

export default CreateGrid;
