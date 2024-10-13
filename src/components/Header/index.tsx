import React from "react";
import { themeContext } from "./../../context/ThemeContext";
import useGradientSlicer from "./../../hooks/useGradientSlicer";
import classes from "./index.module.css";
function Index() {
  const ctx = React.useContext(themeContext);
  const color = "var(--grey)";
  const gradient = ctx?.theme?.color;
  const [left, right] = useGradientSlicer(gradient);
  return (
    <div className={classes.header}>
      <h3 id="logo-b" style={{ color }}>
        MotivaPulse
      </h3>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#dilemma">The AI Dilemma</a></li>
          <li><a href="#revolution">Our Revolutionary Approach</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#why-us">Why Choose us</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* <button> */}
      {/*   <svg id="nav-svg" viewBox="0 0 100 100"> */}
      {/*     <defs> */}
      {/*       <linearGradient id="grd" x1="0%" y1="0%" x2="0%" y2="100%"> */}
      {/*         <stop data-color-c="l" offset="0%" stopColor={left}></stop> */}
      {/*         <stop */}
      {/*           data-color-c="r" */}
      {/*           id="" */}
      {/*           offset="100%" */}
      {/*           stopColor={right} */}
      {/*         ></stop> */}
      {/*       </linearGradient> */}
      {/*     </defs> */}
      {/*     <circle */}
      {/*       stroke="url(#grd)" */}
      {/*       fill="none" */}
      {/*       cx="50" */}
      {/*       cy="50" */}
      {/*       r="48" */}
      {/*     ></circle> */}
      {/*   </svg> */}
      {/*   <span className={classes.hamburger}> */}
      {/*     <span */}
      {/*       style={{ backgroundColor: color }} */}
      {/*       className={classes.before} */}
      {/*     ></span> */}
      {/*     <span */}
      {/*       style={{ backgroundColor: color }} */}
      {/*       className={classes.after} */}
      {/*     ></span> */}
      {/*   </span> */}
      {/* </button> */}
    </div>
  );
}

export default Index;
