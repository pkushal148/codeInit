import React from "react";

const Terminology = () => {
  return (
    <div className="terminology mb-5">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acnbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              PLAIN TEXT
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body acnbdy">
              Plaintext is the original, unencrypted message or data that is
              readable and understandable by humans, serving as the input for
              encryption algorithms.It represents the information in its natural
              form before any cryptographic operations have been applied to
              conceal its content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acnbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              KEY
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body acnbdy">
              A key is a piece of information, typically a string of characters,
              used to control the cryptographic operations of encryption and
              decryption, ensuring the security and confidentiality of data by
              enabling authorized access and preventing unauthorized access.
              Keys are essential components in cryptographic systems,
              determining the specific transformation applied to plaintext to
              produce ciphertext and vice versa.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acnbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              CIPHER TEXT
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body acnbdy">
              Ciphertext is the encrypted form of plaintext, resulting from
              applying cryptographic algorithms to obscure the original
              message's content. It appears as unintelligible and unreadable
              data, ensuring confidentiality and security during transmission or
              storage without revealing the underlying information.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acnbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              ENCRYPTION
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body acnbdy">
              Encryption is the process of converting plaintext into ciphertext
              using an algorithm and a key, making it unreadable to unauthorized
              users. Decryption reverses this process, transforming ciphertext
              back into plaintext using the same algorithm and key. This ensures
              data confidentiality and security during transmission or storage.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed acnbtn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              DECRYPTION
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body acnbdy">
              Decryption is the process of converting ciphertext back into
              plaintext using the appropriate algorithm and key, essentially
              reversing the encryption process to retrieve the original message
              or data. It ensures that authorized users can access and
              understand the information that was encrypted.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminology;
