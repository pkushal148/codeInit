import React from "react";

const EncryptRuleGrid = (props) => {
  const gridKey = props.gridKey;
  const plain = props.encrypted;
  const cipher = props.decrypted;

  return (
    <div>
      <div className="container text-center grid">
        {gridKey.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                style={
                  plain[0] === cell || plain[1] === cell
                    ? { backgroundColor: "lightcoral" }
                    : cipher[0] === cell || cipher[1] === cell
                    ? { backgroundColor: "lightgreen" }
                    : {}
                }
                className="col cell"
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EncryptRuleGrid;
