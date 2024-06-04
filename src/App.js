import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Encryption from "./components/Encryption";
import Decryption from "./components/Decryption";
import RemoveDuplicates from "./components/RemoveDuplicates";
import CreateGrid from "./components/CreateGrid";
import FillGrid from "./components/FillGrid";
import SplitText from "./components/SplitText";
import Encrypt1 from "./components/Encrypt1";
import Encrypt2 from "./components/Encrypt2";
import Encrypt3 from "./components/Encrypt3";
import EncryptWithGrid from "./components/EncryptWithGrid";
import { useState } from "react";

function App() {
  const [entry, setEntry] = useState({
    plainText: "",
    Key: "",
    cipherText: "",
  });

  const onChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const encrypt = (ctext) => {
    setEntry({ ...entry, cipherText: ctext });
  };

  const decrypt = (ptext) => {
    setEntry({ ...entry, plainText: ptext });
  };

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/encryption"
              element={
                <Encryption
                  entry={entry}
                  onChange={onChange}
                  encrypt={encrypt}
                />
              }
            ></Route>
            <Route
              exact
              path="/decryption"
              element={
                <Decryption
                  entry={entry}
                  onChange={onChange}
                  decrypt={decrypt}
                />
              }
            ></Route>
            <Route
              exact
              path="/encrypt/remove-duplicates"
              element={<RemoveDuplicates />}
            ></Route>
            <Route
              exact
              path="/encrypt/create-grid"
              element={<CreateGrid />}
            ></Route>
            <Route
              exact
              path="/encrypt/fill-grid"
              element={<FillGrid />}
            ></Route>
            <Route
              exact
              path="/encrypt/split-text"
              element={<SplitText />}
            ></Route>
            <Route
              exact
              path="/encrypt/Encrypt1"
              element={<Encrypt1 />}
            ></Route>
            <Route
              exact
              path="/encrypt/Encrypt2"
              element={<Encrypt2 />}
            ></Route>
            <Route
              exact
              path="/encrypt/Encrypt3"
              element={<Encrypt3 />}
            ></Route>
            <Route
              exact
              path="/encrypt/EncryptWithGrid"
              element={<EncryptWithGrid />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
