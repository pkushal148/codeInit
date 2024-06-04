import React from "react";
import Titles from "./Titles";
import DisplayLetters from "./DisplayLetters";
import InputRow from "./InputRow";
import { Link } from "react-router-dom";

const FillGrid = () => {
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText="kushal" Key="key" />
      <div>
        <h3 className="m-4">STEP 3 : COMPLETING THE GRID</h3>
        <ul>
          <li>
            Complete the grid with remaining alphabets which are not present in
            the grid. Remember to ignore 'J'.
          </li>
        </ul>
        <div className="m-3">
          <DisplayLetters Text="key" />
        </div>
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
      <Link className="btn m-2 next" to="/encrypt/split-text" role="button">
        Next
      </Link>
      <Link className="btn m-2 prev" to="/encrypt/create-grid" role="button">
        Previous
      </Link>
    </div>
  );
};

export default FillGrid;
