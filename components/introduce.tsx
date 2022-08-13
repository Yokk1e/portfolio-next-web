import styled from "styled-components";

const ProfileWapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(243 244 246);
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

const ProfileContentWapper = styled.div`
  z-index: 10;
  overflow: hidden;
  margin-top: 0.25rem;
  align-items: center;
`;

const ProfileIntro = styled.div`
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  width: 100%;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-top: 5rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const IntroTextWapper = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
    padding-right: 4rem;
  }
`;

const IntroTextHeader = styled.h1`
  margin: 0;
  margin-top: 1.5rem;
  color: rgb(31 41 55);
  font-weight: 700;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 3rem;
    line-height: 1;
  }
`;
const Text = styled.p`
  margin: 0;
  color: rgb(75 85 99);
  line-height: 1.75rem;
  font-weight: 400;
  margin-top: 1rem;
  font-size: 1.25rem;
  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const ProfileImageWapper = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
const ProfileImage = styled.img`
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
  @media (min-width: 1024px) {
    max-height: 24rem;
  }
`;

const TopicWapper = styled.div`
  padding-top: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
    padding-top: 4rem;
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const TopicWapper2 = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
    padding-top: 4rem;
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
const TopicHeader = styled.h2`
  color: rgb(31 41 55);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  @media (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
const InternalLink = styled.a`
  color: rgb(37 99 235);
  &:hover {
    color: rgb(59 130 246);
  }
`;
export function Introduce() {
  return (
    <ProfileWapper>
      <ProfileContentWapper>
        <ProfileIntro>
          <IntroTextWapper>
            <IntroTextHeader>Hi 👋 I'm Satthabut</IntroTextHeader>
            <Text>
              I'm a Full Stack Developer. I started coding at the age of
              nineteen and I have 2 years of experience working professionally as
              a Developer and I am more passionate about it than ever before.
            </Text>
            <Text>
              Hopefully, you'll get some insights about myself and my work on
              this site.
            </Text>
          </IntroTextWapper>
          <ProfileImageWapper>
            <ProfileImage src={"/profile.png"} />
          </ProfileImageWapper>
        </ProfileIntro>
        <TopicWapper>
          <TopicHeader>Current Position</TopicHeader>
          <Text>
            Full Stack Developer @{" "}
            <InternalLink href="https://hocco.co/" target="_blank">
              Hocco
            </InternalLink>{" "}
            (Jun 2020 - Present)
          </Text>
        </TopicWapper>
        <TopicWapper2>
          <TopicHeader>Former Position</TopicHeader>
          <Text>
            Intern Java Developer @{" "}
            <InternalLink href="https://avlgb.com/" target="_blank">
              Avalant
            </InternalLink>{" "}
            (Jun 2019 - Sep 2019)
          </Text>
        </TopicWapper2>
      </ProfileContentWapper>
    </ProfileWapper>
  );
}
