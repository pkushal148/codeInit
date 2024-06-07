import React from "react";
import Titles from "./Titles";
import InputRowd from "./InputRowd";
import { Link } from "react-router-dom";
import DisplayDiGraphs from "./DisplayDiGraphs";

const SplitDecrypt = (props) => {
  const entry = props.entry;
  let cipherText = entry.cipherText;

  if (cipherText.length % 2 !== 0) {
    cipherText += "z";
  }

  return (
    <div>
      <Titles title="Decryption" />
      <InputRowd cipherText={entry.cipherText} Key={entry.Key} />
      <div className="mt-10">
        <h3 className="m-4">STEP 4 : PROCESSING THE PLAIN TEXT</h3>
        <ul>
          <li className="m-3">
            Unlike encryption, text processing in decryption does not require
            any insertions or padding at the end.
          </li>
          <li className="m-3">
            This is because the ciphertext contains no continuously repeated
            letters and has an odd-length size.
          </li>

          <li className="m-3">Converting cipher text into digraphs, we get:</li>
          <div className="m-4">
            <DisplayDiGraphs Text={cipherText} />
          </div>
        </ul>
      </div>
      <Link className="btn m-2 next" to="/decrypt/Decrypt1" role="button">
        Next
      </Link>
      <Link className="btn m-2 prev" to="/decrypt/fill-grid" role="button">
        Previous
      </Link>
    </div>
  );
};

export default SplitDecrypt;
