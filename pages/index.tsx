import styled from "styled-components";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Container as EngineContainer, Engine } from "tsparticles-engine";

const Container = styled.div`
  margin-top: 4rem;
  background-color: rgb(243 244 246);
`;

const ContentContainer = styled.div`
  z-index: 10;
  overflow: hidden;
  flex-grow: 1;
  align-items: center;
`;

const ContentWapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-top: 8rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const ParticlesContainer = styled(Particles)`
  z-index: 10;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  background-color: rgb(243 244 246);
`;

const Content = styled.div`
  z-index: 10;
  flex-direction: column;
  display: flex;

  @media (min-width: 640px) {
    width: 66.67%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Header = styled.h1`
  text-transform: uppercase;
  color: rgb(31 41 55);
  line-height: 1;
  font-size: 3.75rem;
  font-weight: 900;
  flex-direction: column;
  display: flex;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 6rem;
    line-height: 1;
  }
`;

const SubHeader = styled.span`
  font-size: 3rem;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

const Text = styled.p`
  color: rgb(31 41 55);
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const ButtonWapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Button = styled.a`
  color: white;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.25rem;
  background-color: rgb(37, 99, 235);
  &:hover {
    background-color: rgb(59 130 246);
  }
`;

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: EngineContainer | undefined) => {},
    []
  );
  return (
    <Container>
      <ContentContainer>
        <ContentWapper>
          <ParticlesContainer
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: {
                  value: [
                    "#c311e7",
                    "#b8e986",
                    "#4dc9ff",
                    "#ffd300",
                    "#FF7E79",
                  ],
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.9,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.5,
                    sync: false,
                  },
                },
                size: {
                  value: 8,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 30,
                    size_min: 0.1,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  color: "#000000",
                  opacity: 0.8,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <Content>
            <Header>
              Hello, <SubHeader>I'm satthabut</SubHeader>
            </Header>
            <Text>Full-stack web developer based in Bangkok</Text>
            <Text>This is my web portfolio.</Text>
            <Text>
              Feel free to take a look at my blogs on the web portfolio page.
            </Text>
            <ButtonWapper>
              <Button href="/about">About me</Button>
            </ButtonWapper>
          </Content>
        </ContentWapper>
      </ContentContainer>
    </Container>
  );
}
