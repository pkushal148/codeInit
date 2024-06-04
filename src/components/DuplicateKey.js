import React from "react";
import DisplayLetters from "./DisplayLetters";

const DuplicateKey = (props) => {
  return (
    <div className="mt-5 keypage">
      <h3 className="mb-4">STEP:1 REMOVING DUPLICATES</h3>
      <ul>
        <li>Remove duplicates in the Encryption Key</li>
        <DisplayLetters Text={props.Key} />
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
        <DisplayLetters Text={props.key} />
      </ul>
    </div>
  );
};

export default DuplicateKey;
