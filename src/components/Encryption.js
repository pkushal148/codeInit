import React from "react";
import Titles from "./Titles";
import { Link } from "react-router-dom";
import { encryptByPlayfairCipher } from "./utils";

const Encryption = (props) => {
  const { entry, onChange, encrypt } = props;

  const encryption = () => {
    let cText = encryptByPlayfairCipher(entry.plainText, entry.Key);
    encrypt(cText);
  };

  return (
    <>
      <Titles title="Encryption" />
      <div>
        <div className="row mt-5">
          <div className="col m-4 ">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Plain Text
              </label>
              <input
                type="text"
                className="form-control textInput"
                id="plainText"
                placeholder="Enter your Plain Text"
                name="plainText"
                onChange={onChange}
                value={entry.plainText}
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
          <button className="m-5" onClick={encryption}>
            Encrypt
          </button>
          <input
            type="text"
            name="cipherText"
            id="cipherText"
            className="m-5 output"
            placeholder="Cipher Goes here ..."
            readOnly
            value={entry.cipherText}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Link
            className="btn mx-2 process"
            to="/encrypt/remove-duplicates"
            role="button"
            onClick={encryption}
          >
            Show Encryption Process
          </Link>
        </div>
      </div>
    </>
  );
};

export default Encryption;
