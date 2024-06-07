import React from "react";

const KeyGrid = (props) => {
  const gridKey = props.gridKey;
  const seen = props.seen;
  return (
    <div>
      <div className="container text-center grid">
        {gridKey.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                style={
                  seen && seen.has(cell) ? { backgroundColor: "lightgray" } : {}
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

export default KeyGrid;
