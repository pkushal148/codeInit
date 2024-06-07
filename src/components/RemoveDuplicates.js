import React from "react";
import Titles from "./Titles";
import InputRow from "./InputRow";
import DuplicateKey from "./DuplicateKey";
import { Link } from "react-router-dom";

const RemoveDuplicates = (props) => {
  const entry = props.entry;
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText={entry.plainText} Key={entry.Key} />
      <DuplicateKey Key={entry.Key} />
      <Link className="btn m-2 next" to="/encrypt/create-grid" role="button">
        Next
      </Link>
    </div>
  );
};

export default RemoveDuplicates;
