import "./App.css";
import { React, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Suspense } from "react";
import Loader from "./Components/Loader";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Service from "./Pages/Service";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  // const randomNumber = Math.floor(Math.random() * 3) + 1;
  // console.log("randomNumber", randomNumber);

  const [Website, setWebsite] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    if (sessionStorage.getItem("AnimationVisible")) {
      setWebsite(true);
    } else {
      setTimeout(() => {
        setWebsite(true);
        sessionStorage.setItem("AnimationVisible", true)
      }, 6000);
    }

  }, []);

  return (
    <BrowserRouter basename="/">
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
          {Website ? (
            <div style={{ height: "100vh" }}>

              <Routes>
                <Route path="/" element={<Suspense>
                  <Home />
                </Suspense >} />
                <Route path="/About" element={<Suspense>
                  <About />
                </Suspense >} />
                <Route path="/Service" element={<Suspense>
                  <Service />
                </Suspense >} />
                <Route path="/Project" element={<Suspense>
                  <Project />
                </Suspense >} />
                <Route path="/Contact" element={<Suspense>
                  <Contact />
                </Suspense >} />
                <Route path="*" element={<Suspense>
                  <NotFound />
                </Suspense >} />

              </Routes>
            </div>
          ) : (
            <div className="full-page-iframe">
              <iframe
                id="AnimationIframe"
                src="https://freenzatech.com/Animation/Animation.html"
                title="Animation"
              />
            </div>
          )}
        </>
      }
    </BrowserRouter>
  );
}

export default App;
