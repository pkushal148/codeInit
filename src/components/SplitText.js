import React from "react";
import Titles from "./Titles";
import DisplayLetters from "./DisplayLetters";
import InputRow from "./InputRow";
import { Link } from "react-router-dom";
import DisplayDiGraphs from "./DisplayDiGraphs";

const SplitText = (props) => {
  const entry = props.entry;
  const plainText = entry.plainText;
  const seen2 = new Set();
  const level1 = plainText.replaceAll("j", "i");
  let level2 = "";
  for (let i = 0; i < level1.length - 1; i++) {
    level2 += level1[i];
    if (level1[i] === level1[i + 1]) {
      seen2.add(level2.length);
      level2 += "x";
    }
  }
  level2 += level1[level1.length - 1];
  const seen = new Set();
  seen.add("j");

  let level3 = level2;
  if (level2.length % 2 !== 0) {
    level3 += "z";
  }
  return (
    <div>
      <Titles title="Encryption" />
      <InputRow plainText={entry.plainText} Key={entry.Key} />
      <div>
        <h3 className="m-4">STEP 4 : PROCESSING THE PLAIN TEXT</h3>
        <ul>
          <li>
            Replace 'J' with 'I' in the Plain Text as there will be no 'J' in
            the Key Grid
            <DisplayLetters Text={plainText} seen={seen} />
          </li>
          <li>
            Find the characters that are repeated continuously and insert 'X'
            between them. (Note: This implies inserting 'X' in between 'XX'
            also.)
          </li>
          <div className="m-3">
            <div className="displayKey d-flex">
              {level2 &&
                level2.split("").map((c, i) => (
                  <span
                    key={i}
                    style={seen2 && seen2.has(i) ? { color: "violet" } : {}}
                  >
                    {c}
                  </span>
                ))}
            </div>
          </div>
          <li>
            Find the length of the updated Plain Text and append 'Z' at the end
            if the length of the string is odd to make ot even.
          </li>
          <div className="m-3">
            <div className="displayKey d-flex">
              {level3 &&
                level3.split("").map((c, i) => (
                  <span
                    key={i}
                    style={
                      i === level3.length - 1 && c === "z"
                        ? { color: "violet" }
                        : {}
                    }
                  >
                    {c}
                  </span>
                ))}
            </div>
          </div>
          <li>
            Now divide the processed Plain Text into di-grams(2 character
            words). These di-grams are encrypted using Grid in the next steps.
          </li>
          <DisplayDiGraphs Text={level3} />
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
