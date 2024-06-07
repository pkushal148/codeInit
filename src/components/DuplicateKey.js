import React from "react";
import { Duplicate } from "./utils";

const DuplicateKey = (props) => {
  const initialKey = props.Key;
  const { finalKey, duplicates } = Duplicate(initialKey);
  const seen = new Set();
  seen.add("j");
  return (
    <div className="mt-5 keypage">
      <h3 className="mb-4">STEP:1 REMOVING DUPLICATES</h3>
      <ul>
        <li>Remove duplicates in the Encryption Key</li>
        <div className="m-3">
          <div className="displayKey d-flex">
            {initialKey &&
              initialKey.split("").map((c, i) => (
                <span
                  key={i}
                  style={
                    duplicates && duplicates.has(i)
                      ? { color: "lightgray" }
                      : {}
                  }
                >
                  {c}
                </span>
              ))}
          </div>
        </div>
        <li>
          We need to create a 5x5 grid and fill it with the alphabet, which will
          act as the encryption and decryption key.
        </li>
        <li>
          As there are 26 letters in alphabets, So we have to omit a letter
          (usually 'J') to fill the grid correctly.
        </li>
        <li>
          When 'J' occurs in Encryption key it is removed. So the final updated
          Encryption key becomes
        </li>
        <div className="m-3">
          <div className="displayKey d-flex">
            {finalKey &&
              finalKey.split("").map((c, i) => (
                <span key={i} style={c === "j" ? { color: "lightgray" } : {}}>
                  {c}
                </span>
              ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default DuplicateKey;
