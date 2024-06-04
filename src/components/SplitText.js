import React from "react";
import Titles from "./Titles";
import DisplayLetters from "./DisplayLetters";
import InputRow from "./InputRow";
import { Link } from "react-router-dom";

const SplitText = () => {
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText="kushal" Key="key" />
      <div>
        <h3 className="m-4">STEP 4 : PROCESSING THE PLAIN TEXT</h3>
        <ul>
          <li>
            Replace 'J' with 'I' in the Plain Text as there will be no 'J' in
            the Key Grid
            <DisplayLetters Text="KUSHAL" />
          </li>
          <li>
            Find the characters that are repeated continuously and insert 'X'
            between them. (Note: This implies inserting 'X' in between 'XX'
            also.)
          </li>
          <DisplayLetters Text="KUSHAL" />
          <li>
            Find the length of the updated Plain Text and append 'Z' at the end
            if the length of the string is odd to make ot even.
          </li>
          <DisplayLetters Text="KUSHAL" />
          <li>
            Now divide the processed Plain Text into di-grams(2 character
            words). These di-grams are encrypted using Grid in the next steps.
          </li>
          <DisplayLetters Text="KUSHAL" />
        </ul>
      </div>
      <Link className="btn m-2 next" to="/encrypt/Encrypt1" role="button">
        Next
      </Link>
      <Link className="btn m-2 prev" to="/encrypt/fill-grid" role="button">
        Previous
      </Link>
    </div>
  );
};

export default SplitText;
