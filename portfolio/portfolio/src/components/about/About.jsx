
import React from "react";
import Img from "../../assets/avatar-3.svg";
import AboutBox from "./AboutBox";
import {
  AboutSection,
  SectionTitle,
  AboutContainer,
  AboutImage,
  AboutData,
  AboutInfo,
  AboutDescription,
  Button,
  AboutSkills,
  SkillsData,
  SkillsTitles,
  SkillsName,
  SkillsNumber,
  SkillsBar,
  SkillsPercentage,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>

      <AboutContainer>
        <AboutImage src={Img} alt="Profile" />

        <AboutData>
          <AboutInfo>
            <AboutDescription>
              <b>HI! I'M KIMIA MASHHADIZADEH</b>
              <br />
              <br />
              I AM A SELF-TAUGHT GRAPHIC DESIGNER BASED IN IRAN. I AM CURRENTLY
              PURSING A DEGREE IN FRONTEND AND DESIGNING WEB. MY STUDY FIELD IS
              COMPUTER SCIENCE BACHELOR DEGREE.
            </AboutDescription>
            <Button href="">Download CV</Button>
          </AboutInfo>

          <AboutSkills>
            <SkillsData>
              <SkillsTitles>
                <SkillsName>FRONTEND DEVELOPER</SkillsName>
                <SkillsNumber>75%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar>
                <SkillsPercentage width="75%" color="var(--first-color)" />
              </SkillsBar>
            </SkillsData>

            <SkillsData>
              <SkillsTitles>
                <SkillsName>UI-Ux DESIGNER</SkillsName>
                <SkillsNumber>70%</SkillsNumber>
              </SkillsTitles>
              <SkillsBar>
                <SkillsPercentage width="70%" color="var(--title-color)" />
              </SkillsBar>
            </SkillsData>

            <SkillsData>
              <SkillsTitles>
                <SkillsName>WE WILL ACHIEVE MORE!</SkillsName>
                <SkillsNumber>...</SkillsNumber>
              </SkillsTitles>
              <SkillsBar>
                <SkillsPercentage width="100%" color="var(--hover-color)" />
              </SkillsBar>
            </SkillsData>
          </AboutSkills>
        </AboutData>
      </AboutContainer>
      <AboutBox />
    </AboutSection>
  );
};

export default About;
