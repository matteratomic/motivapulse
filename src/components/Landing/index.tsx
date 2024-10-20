import React, { useEffect } from "react";
import classes from "./index.module.css";
import gsap from "gsap";
import { themeContext } from "./../../context/ThemeContext";
import Screen from "../Screen";
import Link from "../Link";
function Index() {
  const ctx = React.useContext(themeContext);
  const svgref = React.useRef<SVGSVGElement>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const t1 = React.useRef<gsap.core.Timeline | null>();
  useEffect(() => {
    gsap.to(svgref?.current, {
      rotate: "-=360_ccw",
      repeat: -1,
      ease: "linear",
      duration: 8,
    });
    const children = ref.current && Array.from(ref.current.children);
    const duration = 0.33;
    const pause = 0.33;
    const stagger = duration + pause;
    const repeatDelay = stagger * (children!.length - 1) + pause;
    t1.current = gsap.timeline({
      repeat: -1,
    });
    if (ref.current) {
      t1.current
        .from(ref.current.children, {
          yPercent: 100,
          duration,
          stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay,
          },
        })
        .to(
          ref.current.children,
          {
            yPercent: -100,
            duration,
            stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay,
            },
          },
          stagger
        );
    }

    return () => {
      t1.current?.kill();
    };
  }, [ctx]);
  return (
    <section id="home" className={classes.main}>
      <div className={classes.mainWrapper}>
        {/* <div className={classes.svgWrapper}> */}
        {/*   <svg viewBox="0 0 100 100" ref={svgref}> */}
        {/*     <defs> */}
        {/*       <path */}
        {/*         id="c-1" */}
        {/*         d="M 50, 50m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1-50,0" */}
        {/*       ></path> */}
        {/*     </defs> */}
        {/*     <text fontSize="8"> */}
        {/*       <textPath xlinkHref="#c-1">We welcome you to MotivaPulse</textPath> */}
        {/*     </text> */}
        {/*   </svg> */}
        {/* </div> */}
        <div className={classes.textContainer}>
          <div className={classes.h1txt}>Unleash your business potential</div>
          <div className={classes.h1txt}>with the perfect blend of</div>
          <div className={classes.h1txt}>human expertise and AI power</div>
          <div className={classes.rcontainer}>
            <div className={classes.h1txt}>for your&nbsp;</div>
            <div
              ref={ref}
              className={[classes.h1txt, classes.revealer].join(" ")}
            >
              {["marketing", "support", "analysis", "programming", "design", "recruiment", "e-learning", "translation", "supply chain"].map((val, i) => {
                return (
                  <div
                    className={classes.sparetxt}
                    key={ctx!.theme!.color + i}
                    style={{
                      background: ctx?.theme?.color,
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.subheading}>
            At MotivaPulse AI, we seamlessly integrate cutting-edge AI technologies with the wisdom of seasoned professionals to drive innovation and efficiency in your business. Our unique hybrid approach ensures you receive unparalleled solutions tailored to your specific needs.
          </div>
        </div>
        {/* <Link secondary={"rgba(255,255,255,0.1)"} text={"SCROLL DOWN"} /> */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: "flex", alignItems: "center"
        }}>
          <a href="#services" className={classes.button}>
            Explore our services
          </a>
          <a href="#contact" className={classes.buttonOutline}>
            Book a Consultation
          </a>
        </div>
      </div>
      <Screen />
    </section>
  );
}

export default Index;
