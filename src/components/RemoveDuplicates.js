import React from "react";
import Titles from "./Titles";
import InputRow from "./InputRow";
import DuplicateKey from "./DuplicateKey";
import { Link } from "react-router-dom";

const RemoveDuplicates = () => {
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText="{plainText}" Key="{Key}" />
      <DuplicateKey Key="key" />
      <Link className="btn m-2 next" to="/encrypt/create-grid" role="button">
        Next
      </Link>
    </div>
  );
};

export default RemoveDuplicates;
