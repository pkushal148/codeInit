import React from "react";
import Titles from "./Titles";
import DisplayLetters from "./DisplayLetters";
import InputRowd from "./InputRowd";
import { Grid, GridKey, fillGrid } from "./utils";
import KeyGrid from "./KeyGrid";
import { Link } from "react-router-dom";

const FillDecrypt = (props) => {
  const entry = props.entry;
  const finalKey = Grid(entry.Key);
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);
  let letters = "abcdefghiklmnopqrstuvwxyz";
  const seen = new Set();
  for (let i = 0; i < finalKey.length; i++) {
    seen.add(finalKey[i]);
  }

  return (
    <div>
      <Titles title="Decryption" />
      <InputRowd cipherText={entry.cipherText} Key={entry.Key} />
      <div>
        <h3 className="m-4">STEP 3 : COMPLETING THE GRID</h3>
        <ul>
          <li>
            Complete the grid with remaining alphabets which are not present in
            the grid. Remember to ignore 'J'.
          </li>
        </ul>
        <div className="m-4">
          <div className="displayKey d-flex">
            <DisplayLetters Text={letters} seen={seen} />
          </div>
        </div>
        <KeyGrid gridKey={finalGrid} seen={seen} />
      </div>
      <Link className="btn m-2 next" to="/decrypt/split-text" role="button">
        Next
      </Link>
      <Link className="btn m-2 prev" to="/decrypt/create-grid" role="button">
        Previous
      </Link>
    </div>
  );
};

export default FillDecrypt;
