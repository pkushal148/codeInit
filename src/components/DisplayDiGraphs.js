import React from "react";

const DisplayDiGraphs = (props) => {
  const text = props.Text;

  const Text = [];
  let i = 0;
  while (i < text.length) {
    let temp = text[i] + text[i + 1];
    Text.push(temp);
    i = i + 2;
  }
  return (
    <div>
      <div className="m-3">
        <div className="displayKey d-flex">
          {Text &&
            Text.map((c, i) => (
              <span className="mx-3" key={i}>
                {c}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayDiGraphs;
