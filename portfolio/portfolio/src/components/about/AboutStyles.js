
import styled from "styled-components";


export const AboutSection = styled.section`
  padding: 2rem 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: var(--title-color);
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  column-gap: 1.875rem;
  align-items: center;
  margin-right: 1.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const AboutData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.875rem;
  background-color: var(--container-color);
  padding: 1.875rem;
  box-shadow: var(--shadow);
  border-radius: var(--border-radius-30);
  position: relative;
  align-items: flex-start;

  &::before {
    content: ' ';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid var(--container-color);
    position: absolute;
    left: -0.93rem;
    top: 20%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutInfo = styled.div`
  margin-bottom: 1rem;
`;

export const AboutDescription = styled.p`
  text-align: justify;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-color);
`;

export const Button = styled.a`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const AboutSkills = styled.div`
  display: grid;
  row-gap: 3.25rem;
  margin-top: 1.5rem;
`;

export const SkillsData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillsName = styled.h3`
  font-size: var(--medium-font-size);
  font-weight: var(--font-bold);
`;

export const SkillsNumber = styled.span`
  font-weight: var(--font-medium);
`;

export const SkillsBar = styled.div`
  background-color: #f1f1f1;
  height: 7px;
  border-radius: 0.25rem;
`;

export const SkillsPercentage = styled.span`
  display: block;
  height: 100%;
  border-radius: inherit;
  background-color: ${({ color }) => color};
  width: ${({ width }) => width};
`;

// Styled components for AboutBox.js
export const AboutBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.875rem;
  margin-top: 4.35rem;
  margin-left: 5.875rem;
`;

export const AboutBoxWrapper = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export const AboutIcon = styled.i`
  font-size: var(--h1-font-size);
  color: var(--first-color);
`;

export const AboutTitle = styled.h3`
  font-size: 1.875rem;
  color: var(--title-color);
`;

export const AboutSubtitle = styled.span`
  font-size: 1rem;
  color: var(--text-color);
`;
