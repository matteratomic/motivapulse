import classes from "./index.module.css";
import React, { useEffect } from "react";
import Palette from "../Palette";
import { themeContext } from "../../context/ThemeContext";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Fb } from "../../assets/fb.svg";
import { ReactComponent as Insta } from "../../assets/insta.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

function Index() {
  const ctx = React.useContext(themeContext);
  const colorPicked = (val: string) => {
    ctx?.setTheme({ color: val });
  };
  useEffect(() => { }, []);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.trisec}>
          <div className={classes.left}>
            <h3 id="logo">MotivaPulse</h3>
            <p>©{new Date().getFullYear()} All rights reserved</p>
            {/* <div> */}
            {/*   <Palette */}
            {/*     style={{ width: "150px", justifyContent: "space-between" }} */}
            {/*     hoverColor={"var(--grey)"} */}
            {/*     colorPicked={colorPicked} */}
            {/*   /> */}
            {/* </div> */}
          </div>
          {/* <div className={classes.middle}> */}
          {/*   <p>Address</p> */}
          {/*   <h3>31 Cours Émile Zola, 69100 Villeurbanne</h3> */}
          {/* </div> */}
          {/* <div className={classes.right}> */}
          {/*   <p>Let's talk together</p> */}
          {/*   <h3>xx xx xx xx xx xxxx@motivapulse.xx</h3> */}
          {/* </div> */}
        </div>
        <div className={classes.rightMost}>
          <div className={classes.social}>
            <Linkedin height={18} width={18} fill="#5c5c5c" />
            <Fb height={18} width={18} fill="#5c5c5c" />
            <Insta height={18} width={18} fill="#5c5c5c" />
            <Twitter height={18} width={18} fill="#5c5c5c" />
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Index;
