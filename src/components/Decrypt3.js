import React from "react";
import Titles from "./Titles";
import InputRowd from "./InputRowd";
import { Link } from "react-router-dom";
import { Grid, GridKey, fillGrid } from "./utils";
import EncryptRuleGrid from "./EncryptRuleGrid";

const Decrypt3 = (props) => {
  const entry = props.entry;
  const finalKey = Grid("monarchy");
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);
  const encrypted = "hx";
  const decrypted = "vb";
  return (
    <div>
      <Titles title="Decryption" />
      <InputRowd cipherText={entry.cipherText} Key={entry.Key} />
      <div>
        <h2 className="m-4 fs-1">Decrypting digraphs with grid</h2>
        <h3 className="m-4">Rule 3 :</h3>
        <ul>
          <li>
            If neither of the above rules is true: Form a rectangle with the two
            letters and take the letters on the horizontal opposite corner of
            the rectangle.
          </li>
        </ul>
        <div className="m-5 d-flex align-items-center">
          <div className="d-flex align-items-center">
            <h4 className="">Cipher Digraph</h4>
            <div className="cellPlain">h</div>
            <div className="cellPlain">x</div>
          </div>
          <div className="container text-center grid">
            <EncryptRuleGrid
              gridKey={finalGrid}
              encrypted={encrypted}
              decrypted={decrypted}
            />
          </div>

          <div className="d-flex align-items-center">
            <div className="cellEncrypt">v</div>
            <div className="cellEncrypt">b</div>
            <h4>Plain Digraph</h4>
          </div>
        </div>
      </div>
      <Link
        className="btn m-2 next"
        to="/decrypt/DecryptWithGrid"
        role="button"
      >
        Next
      </Link>
      <Link className="btn m-2 prev" to="/decrypt/Decrypt2" role="button">
        Previous
      </Link>
    </div>
  );
};

export default Decrypt3;
