import React from "react";
import Titles from "./Titles";
import InputRowd from "./InputRowd";
import DuplicateKey from "./DuplicateKey";
import { Link } from "react-router-dom";

const RemoveDuplicatesd = (props) => {
  const entry = props.entry;
  return (
    <div>
      <Titles title="Decryption" />
      <InputRowd cipherText={entry.cipherText} Key={entry.Key} />
      <DuplicateKey Key={entry.Key} />
      <Link className="btn m-2 next" to="/decrypt/create-grid" role="button">
        Next
      </Link>
    </div>
  );
};

export default RemoveDuplicatesd;
