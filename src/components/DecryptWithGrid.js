import React from "react";
import EncryptRuleGrid from "./EncryptRuleGrid";
import { Link } from "react-router-dom";
import { getDigraphs, getCipherText } from "./utils";
import { useState } from "react";
import { Grid, GridKey, fillGrid, getRulesd } from "./utils";
import { useNavigate } from "react-router-dom";
import InputRowd from "./InputRowd";
import Titles from "./Titles";

const DecryptWithGrid = (props) => {
  const entry = props.entry;
  const plainText = entry.plainText;
  const cipherText = getCipherText(entry.cipherText);
  const plainDiGraphs = getDigraphs(plainText);
  const cipherDigraphs = getDigraphs(cipherText);
  const finalKey = Grid(entry.Key);
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);
  const navigate = useNavigate();

  const rule = getRulesd(cipherText, finalGrid, cipherText.length);

  const [cipher, setCipher] = useState(0);
  const changePage = () => {
    navigate(`../decrypt/Decrypt${rule[cipher]}`);
  };

  return (
    <div>
      <Titles title="Decryption" />
      <InputRowd cipherText={entry.cipherText} Key={entry.Key} />
      <div>
        <h2 className="m-4 fs-1">Decrypting digraphs with grid</h2>
        <h3 className="m-4">STEP 5 :</h3>
        <ul>
          <li>Now apply these rules to digraphs obtained</li>
        </ul>
        <div className="m-3 digraphs d-flex justify-content-center">
          <div className="displayKey d-flex">
            {cipherDigraphs &&
              cipherDigraphs.map((c, i) => (
                <span
                  className="mx-3"
                  key={i}
                  style={
                    i === cipher ? { color: "black" } : { color: "lightgray" }
                  }
                  onClick={() => {
                    setCipher(i);
                  }}
                >
                  {c}
                </span>
              ))}
          </div>
        </div>
        <div className="m-5 d-flex align-items-evenly">
          <div className="d-flex align-items-center">
            <h4 className="">Cipher Digraph</h4>
            <div className="cellPlain">{cipherDigraphs[cipher][0]}</div>
            <div className="cellPlain">{cipherDigraphs[cipher][1]}</div>
          </div>
          <div className="container text-center grid">
            <EncryptRuleGrid
              gridKey={finalGrid}
              encrypted={plainDiGraphs[cipher]}
              decrypted={cipherDigraphs[cipher]}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="cellEncrypt">{plainDiGraphs[cipher][0]}</div>
            <div className="cellEncrypt">{plainDiGraphs[cipher][1]}</div>
            <h4>Plain Digraph</h4>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-2">
          <div className="rule" onClick={changePage}>
            This encryption follows rule {rule[cipher]}
          </div>
        </div>
      </div>
      <Link className="btn m-2 prev" to="/decrypt/Decrypt3" role="button">
        Previous
      </Link>
      <Link className="btn m-2 next" to="/decryption" role="button">
        Decrypt
      </Link>
    </div>
  );
};

export default DecryptWithGrid;
