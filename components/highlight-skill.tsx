import styled from "styled-components";
import Icon from "./icons";

const Container = styled.div`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  background-color: white;
`;

const ContentWapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-top: 1rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const HeaderText = styled.h2`
  line-height: 1;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  margin: 0;
  @media (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const SkillWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skills = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    width: 66.7%;
  }
`;
const SkillText = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 33.3%;
  }
`;
const Skill = styled.div`
  width: 50%;
  text-align: center;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  height: 5rem;
  flex-grow: 1;
  @media (min-width: 640px) {
    width: 33.3%;
  }
`;

const ImageSkill = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 5rem;
`;

const HeaderTextSkill = styled.h3`
  color: rgb(55 65 81);
  margin: 0;
  margin-top: 0.5rem;
  line-height: 1;
  font-size: 1.125rem;
  font-weight: 700;
  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 400;
  margin: 0;
  color: rgb(55 65 81);
  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export function HighlightSkills() {
  return (
    <Container>
      <ContentWapper>
        <Content>
          <HeaderText>Highlighted Skills</HeaderText>
          <SkillWapper>
            <Skills>
              <Skill>
                <ImageSkill src="/nestjs.svg" />
                <HeaderTextSkill>NestJS</HeaderTextSkill>
              </Skill>
              <Skill>
                <ImageSkill src="/nextjs.png" />
                <HeaderTextSkill>NextJS</HeaderTextSkill>
              </Skill>
              <Skill>
                <ImageSkill src="/typescript.svg" />
                <HeaderTextSkill>Typescript</HeaderTextSkill>
              </Skill>
              <Skill>
                <ImageSkill src="/docker.svg" />
                <HeaderTextSkill>Docker</HeaderTextSkill>
              </Skill>
              <Skill>
                <ImageSkill src="/aws.png" />
                <HeaderTextSkill>AWS</HeaderTextSkill>
              </Skill>
              <Skill>
                <ImageSkill src="/solidity.png" />
                <HeaderTextSkill>Solidity</HeaderTextSkill>
              </Skill>
            </Skills>
            <SkillText>
              <Icon symbol="idea" />
              <Text>
                I'm working with Frontend as well as with Backend technologies.
                The ones listed are just a small excerpt.
              </Text>
            </SkillText>
          </SkillWapper>
        </Content>
      </ContentWapper>
    </Container>
  );
}
