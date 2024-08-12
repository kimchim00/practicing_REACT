
import React from "react";
import {
  AboutBoxes,
  AboutBoxWrapper,
  AboutIcon,
  AboutTitle,
  AboutSubtitle,
} from "./AboutStyles";

const AboutBox = () => {
  return (
    <AboutBoxes>
      <AboutBoxWrapper>
        <AboutIcon className="icon-fire" />
        <div>
          <AboutTitle>3</AboutTitle>
          <AboutSubtitle>Project Completed</AboutSubtitle>
        </div>
      </AboutBoxWrapper>

      <AboutBoxWrapper>
        <AboutIcon className="icon-cup" />
        <div>
          <AboutTitle>1386</AboutTitle>
          <AboutSubtitle>Cup of Coffee</AboutSubtitle>
        </div>
      </AboutBoxWrapper>

      <AboutBoxWrapper>
        <AboutIcon className="icon-emotsmile" />
        <div>
          <AboutTitle>4</AboutTitle>
          <AboutSubtitle>Satisfied Clients</AboutSubtitle>
        </div>
      </AboutBoxWrapper>
    </AboutBoxes>
  );
};

export default AboutBox;
