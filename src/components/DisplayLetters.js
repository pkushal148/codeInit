import React from "react";

const DisplayLetters = (props) => {
  const Text = props.Text;
  const seen = props.seen;

  return (
    <div className="m-3">
      <div className="displayKey d-flex">
        {Text &&
          Text.split("").map((c, i) => (
            <span
              key={i}
              style={seen && seen.has(c) ? { color: "lightgray" } : {}}
            >
              {c}
            </span>
          ))}
      </div>
    </div>
  );
};

export default DisplayLetters;
