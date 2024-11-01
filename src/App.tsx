import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Setup from "./components/Setup";
import classes from "./App.module.css";
import useCustomPointer from "./hooks/useCustomPointer";
import ThemeContextProvider from "./context/ThemeContext";
import Main from "./components/Main";
import Success from "./pages/Success"
// import NotFound from "./pages/NotFound";

// Import your other pages/components
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";

function App() {
  useCustomPointer(["A", "BUTTON"]);
  const [, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  const setupSmoothScroll = () => {
    // Your smooth scroll setup code
  };

  return (
    <Router>
      <ThemeContextProvider>
        <div ref={refContainer} className={classes.master}>
          <div ref={ref}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/success" element={<Success />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
