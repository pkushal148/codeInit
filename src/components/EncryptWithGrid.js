import React from "react";
import Titles from "./Titles";
import InputRow from "./InputRow";
import DisplayLetters from "./DisplayLetters";
import { Link } from "react-router-dom";

const EncryptWithGrid = () => {
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText="kushal" Key="key" />
      <div>
        <h2 className="m-4 fs-1">Encrypting digraphs with grid</h2>
        <h3 className="m-4">STEP 5 :</h3>
        <ul>
          <li>Now apply these rules to digraphs obtained</li>
        </ul>
        <DisplayLetters Text="KUSHAL" />
        <div className="m-5 d-flex align-items-evenly">
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
      <Link className="btn m-2 prev" to="/encrypt/Encrypt3" role="button">
        Previous
      </Link>
      <Link className="btn m-2 next" to="/encryption" role="button">
        Encrypt
      </Link>
    </div>
  );
};

export default EncryptWithGrid;
