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
import RemoveDuplicatesd from "./components/RemoveDuplicatesd";
import CreateGridd from "./components/CreateGridd";
import FillDecrypt from "./components/FillDecrypt";
import SplitDecrypt from "./components/SplitDecrypt";
import Decrypt1 from "./components/Decrypt1";
import Decrypt2 from "./components/Decrypt2";
import Decrypt3 from "./components/Decrypt3";
import DecryptWithGrid from "./components/DecryptWithGrid";

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
    console.log(entry);
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
              element={<RemoveDuplicates entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/create-grid"
              element={<CreateGrid entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/fill-grid"
              element={<FillGrid entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/split-text"
              element={<SplitText entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/Encrypt1"
              element={<Encrypt1 entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/Encrypt2"
              element={<Encrypt2 entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/Encrypt3"
              element={<Encrypt3 entry={entry} />}
            ></Route>
            <Route
              exact
              path="/encrypt/EncryptWithGrid"
              element={<EncryptWithGrid entry={entry} />}
            ></Route>
            <Route
              exact
              path="/decrypt/remove-duplicates"
              element={<RemoveDuplicatesd entry={entry} />}
            ></Route>
            <Route
              exact
              path="/decrypt/create-grid"
              element={<CreateGridd entry={entry} />}
            ></Route>
            <Route
              exact
              path="/decrypt/fill-grid"
              element={<FillDecrypt entry={entry} />}
            ></Route>
            <Route
              exact
              path="/decrypt/split-text"
              element={<SplitDecrypt entry={entry} />}
            ></Route>

            <Route
              exact
              path="/decrypt/Decrypt1"
              element={<Decrypt1 entry={entry} />}
            ></Route>

            <Route
              exact
              path="/decrypt/Decrypt2"
              element={<Decrypt2 entry={entry} />}
            ></Route>

            <Route
              exact
              path="/decrypt/Decrypt3"
              element={<Decrypt3 entry={entry} />}
            ></Route>

            <Route
              exact
              path="/decrypt/DecryptWithGrid"
              element={<DecryptWithGrid entry={entry} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
