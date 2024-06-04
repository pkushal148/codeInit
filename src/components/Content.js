import React from "react";
import Terminology from "./Terminology";

const Content = () => {
  return (
    <div className="container">
      <p className="d-inline-flex gap-1">
        <a
          className="btn btn-dark contentBtn"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          WHY CRYPTOGRAPHY ??
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body contentData">
          Encryption scrambles data into a format unreadable without the
          corresponding key. It ensures privacy and security during data
          transmission or storage. Algorithms transform plaintext into
          ciphertext, making it inaccessible to unauthorized parties. Only those
          with the decryption key can revert ciphertext to its original form.
          Encryption is fundamental in safeguarding sensitive information.
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="mb-4">Terminology</h2>
        <Terminology />
      </div>
    </div>
  );
};

export default Content;
