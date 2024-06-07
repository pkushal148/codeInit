import React from "react";
import Titles from "./Titles";
import InputRowd from "./InputRowd";
import { Link } from "react-router-dom";
import { Grid, GridKey, fillGrid } from "./utils";
import EncryptRuleGrid from "./EncryptRuleGrid";

const Decrypt2 = (props) => {
  const entry = props.entry;
  const finalKey = Grid("monarchy");
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);
  const encrypted = "bc";
  const decrypted = "yd";

  return (
    <div>
      <Titles title="Decryption" />
      <InputRowd cipherText={entry.cipherText} Key={entry.Key} />
      <div>
        <h2 className="m-4 fs-1">Decrypting digraphs with grid</h2>
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
            <h4 className="">Cipher Digraph</h4>
            <div className="cellPlain">b</div>
            <div className="cellPlain">c</div>
          </div>
          <div className="container text-center grid">
            <EncryptRuleGrid
              gridKey={finalGrid}
              encrypted={encrypted}
              decrypted={decrypted}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="cellEncrypt">y</div>
            <div className="cellEncrypt">d</div>
            <h4>Plain Digraph</h4>
          </div>
        </div>
      </div>
      <Link className="btn m-2 next" to="/decrypt/Decrypt3" role="button">
        Next
      </Link>
      <Link className="btn m-2 prev" to="/decrypt/Decrypt1" role="button">
        Previous
      </Link>
    </div>
  );
};

export default Decrypt2;
