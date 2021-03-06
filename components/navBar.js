import * as styles from "./navBar.module.css";
import { useRef, useLayoutEffect, useState } from "react";

export default function NavBar({ sectionRefs }) {
  const [isHidden, setIsHidden] = useState(false);
  const yPosRef = useRef(0);
  useLayoutEffect(() => {
    const listner = window.addEventListener("scroll", () => {
      const currY = window.pageYOffset;
      if (currY > yPosRef.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      yPosRef.current = currY;
    });
    return () => {
      window.removeEventListener(listner);
    };
  }, []);

  return (
    <div style={{ top: isHidden ? "-50px" : 0 }} className={styles.navbar}>
      <a
        onClick={() => {
          sectionRefs.home.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Home
      </a>
      <a
        onClick={() => {
          sectionRefs.ourApproach.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Our Approach
      </a>
      <a
        onClick={() => {
          sectionRefs.whoWeAre.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Who We Are
      </a>
      <a
        onClick={() => {
          sectionRefs.contact.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Contact
      </a>
    </div>
  );
}
