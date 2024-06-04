import React from "react";

const HeaderAbout = () => {
  return (
    <div className="heading-about d-flex justify-content-around">
      <div className="heading mt-5">PLAY FAIR CIPHER</div>
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Charles_Wheatstone_-_Project_Gutenberg_etext_13103.jpg"
          alt="img not found"
          className="mt-2 img-thumbnail charles"
        />
        <p className="fw-semibold">Sir Charles Wheatstone</p>
      </div>
    </div>
  );
};

export default HeaderAbout;
