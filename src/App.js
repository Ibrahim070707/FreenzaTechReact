import "./App.css";
import { React, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const randomNumber = Math.floor(Math.random() * 3) + 1;
  // console.log("randomNumber", randomNumber);

  const [Website, setWebsite] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setWebsite(true);
    }, 6000);
  }, []);

  return (
    <BrowserRouter basename="/FreenzaTechWeb">
      {Loading ? "Loading" :
        <>
          {Website === false ? (
            <p
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                gap: "5px",
                position: "absolute",
                top: 15,
                left: "-15px",
                color: "white",
                width: "100%",
                fontSize: "1.4rem",
                fontFamily: "'Quantico', 'sans-serif'",
                cursor: "pointer",
              }}
              onClick={() => setWebsite(true)}
            >
              Skip <FaArrowRight />
            </p>
          ) : (
            ""
          )}
          <div className="full-page-iframe">

            {Website ? (
              <iframe
                src="http://localhost/FreenzaTech/Website/"
                title="File Viewer"
              />
            ) : (
              <iframe
                id="AnimationIframe"
                src="http://localhost/FreenzaTech/Animation/Animation.html"
                title="File Viewer"
              />
            )}
          </div>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
