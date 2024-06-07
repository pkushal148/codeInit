import React from "react";
import Titles from "./Titles";
import { Link } from "react-router-dom";
import { decryptByPlayfairCipher } from "./utils";

const Decryption = (props) => {
  const { entry, onChange, decrypt } = props;

  const decryption = () => {
    let pText = decryptByPlayfairCipher(entry.cipherText, entry.Key);
    decrypt(pText);
  };

  return (
    <>
      <Titles title="Decryption" />
      <div>
        <div className="row mt-5">
          <div className="col m-4 ">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Cipher Text
              </label>
              <input
                type="text"
                className="form-control textInput"
                id="cipherText"
                placeholder="Enter your Cipher Text"
                name="cipherText"
                onChange={onChange}
                value={entry.cipherText}
              />
            </div>
          </div>
          <div className="col m-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Key
              </label>
              <input
                type="text"
                className="form-control textInput"
                id="Key"
                placeholder="Enter Your Key"
                name="Key"
                onChange={onChange}
                value={entry.Key}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button className="m-5" onClick={decryption}>
            Decrypt
          </button>
          <input
            type="text"
            name="plainText"
            id="plainText"
            className="m-5 output"
            placeholder="Plain Text Goes here ..."
            readOnly
            value={entry.plainText}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Link
            className="btn mx-2 process"
            to="/decrypt/remove-duplicates"
            role="button"
            onClick={decryption}
          >
            Show Decryption Process
          </Link>
        </div>
      </div>
    </>
  );
};

export default Decryption;
