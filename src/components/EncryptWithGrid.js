import React from "react";
import Titles from "./Titles";
import InputRow from "./InputRow";
import EncryptRuleGrid from "./EncryptRuleGrid";
import { Link } from "react-router-dom";
import { getDigraphs, getPlainText } from "./utils";
import { useState } from "react";
import { Grid, GridKey, fillGrid, getRules } from "./utils";
import { useNavigate } from "react-router-dom";

const EncryptWithGrid = (props) => {
  const entry = props.entry;
  const plainText = getPlainText(entry.plainText);
  const cipherText = entry.cipherText;
  const plainDiGraphs = getDigraphs(plainText);
  const cipherDigraphs = getDigraphs(cipherText);
  const finalKey = Grid(entry.Key);
  const gridKey = GridKey(finalKey);
  const finalGrid = fillGrid(gridKey);
  const navigate = useNavigate();

  const rule = getRules(plainText, finalGrid);

  const [plain, setPlain] = useState(0);
  const changePage = () => {
    navigate(`../encrypt/Encrypt${rule[plain]}`);
  };

  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText={entry.plainText} Key={entry.Key} />
      <div>
        <h2 className="m-4 fs-1">Encrypting digraphs with grid</h2>
        <h3 className="m-4">STEP 5 :</h3>
        <ul>
          <li>Now apply these rules to digraphs obtained</li>
        </ul>
        <div className="m-3 digraphs d-flex justify-content-center">
          <div className="displayKey d-flex">
            {plainDiGraphs &&
              plainDiGraphs.map((c, i) => (
                <span
                  className="mx-3"
                  key={i}
                  style={
                    i === plain ? { color: "black" } : { color: "lightgray" }
                  }
                  onClick={() => {
                    setPlain(i);
                  }}
                >
                  {c}
                </span>
              ))}
          </div>
        </div>
        <div className="m-5 d-flex align-items-evenly">
          <div className="d-flex align-items-center">
            <h4 className="">Plain Digraph</h4>
            <div className="cellPlain">{plainDiGraphs[plain][0]}</div>
            <div className="cellPlain">{plainDiGraphs[plain][1]}</div>
          </div>
          <div className="container text-center grid">
            <EncryptRuleGrid
              gridKey={finalGrid}
              encrypted={plainDiGraphs[plain]}
              decrypted={cipherDigraphs[plain]}
            />
          </div>
          <div className="d-flex align-items-center">
            <div className="cellEncrypt">{cipherDigraphs[plain][0]}</div>
            <div className="cellEncrypt">{cipherDigraphs[plain][1]}</div>
            <h4>Encrypted Digraph</h4>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-2">
          <div className="rule" onClick={changePage}>
            This encryption follows rule {rule[plain]}
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
