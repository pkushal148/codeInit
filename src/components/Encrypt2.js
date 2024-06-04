import React from "react";
import Titles from "./Titles";
import InputRow from "./InputRow";
import { Link } from "react-router-dom";

const Encrypt2 = () => {
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText="kushal" Key="key" />
      <div>
        <h2 className="m-4 fs-1">Encrypting digraphs with grid</h2>
        <h3 className="m-4">Rule 2 :</h3>
        <ul>
          <li>
            If both the letters are in the same row: Take the letter to the
            right of each one (going back to the leftmost if at the rightmost
            position).
          </li>
        </ul>
        <div className="m-5 d-flex align-items-center">
          <div className="d-flex align-items-center">
            <h4 className="">Plain Digraph</h4>
            <div className="cellPlain">G</div>
            <div className="cellPlain">H</div>
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
          <div className="d-flex align-items-center">
            <div className="cellEncrypt">G</div>
            <div className="cellEncrypt">H</div>
            <h4>Encrypted Digraph</h4>
          </div>
        </div>
      </div>
      <Link className="btn m-2 next" to="/encrypt/Encrypt3" role="button">
        Next
      </Link>
      <Link className="btn m-2 prev" to="/encrypt/Encrypt1" role="button">
        Previous
      </Link>
    </div>
  );
};

export default Encrypt2;
