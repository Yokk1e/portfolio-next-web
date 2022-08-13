import Link from "next/link";
import styled from "styled-components";
import Icon from "./icons";

const FooterContainer = styled.footer`
  position: relative;
  padding-top: 0.25rem;
  margin-top: 2.5rem;
  border-bottom-width: 2px;
  border-color: rgb(55 65 81);
  background-color: rgb(229 231 235);
`;
const RoutesContainer = styled.div`
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 3rem;
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
const SocialContainer = styled.div`
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
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
const CreditContainer = styled.div`
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
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
const RouteBlock = styled.div`
  display: block;
  align-items: center;
`;
const RouteGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
`;
const LinkMenu = styled.a`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: rgb(75 85 99);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  text-decoration: inherit;
  &:hover {
    cursor: pointer;
    color: rgb(59 130 246);
  }
`;

const CreditWapper = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  border-color: rgb(209 213 219);
`;
const CreditGroup = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 640px) {
    width: 66.67%;
  }
`;
const CreditText = styled.p`
  margin-bottom: 0.25rem;
  color: rgb(75 85 99);
`;
const SocialGroups = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-inline-start: 0px;
`;

interface SocialProps {
  notfirst: boolean;
}
const Social = styled.li<SocialProps>`
  display: inline-block;
  margin-left: ${(props) => (props.notfirst ? "1rem" : "0")};
`;
const UnderLine = styled.div`
  width: 8rem;
  margin-top: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid rgba(156 163 175); ;
`;
export function Footer() {
  return (
    <FooterContainer>
      <RoutesContainer>
        <RouteBlock>
          <RouteGroup>
            <Link href="/">
              <LinkMenu>Home</LinkMenu>
            </Link>
            <Link href="/about">
              <LinkMenu>About</LinkMenu>
            </Link>
          </RouteGroup>
        </RouteBlock>
      </RoutesContainer>
      <SocialContainer>
        <SocialGroups>
          <Social notfirst={false}>
            <a href="https://github.com/Yokk1e" target="_blank">
              <Icon symbol="github" />
            </a>
          </Social>
          <Social notfirst>
            <a href="https://www.facebook.com/YokkyS" target="_blank">
              <Icon symbol="facebook" />
            </a>
          </Social>
          <Social notfirst>
            <a href="https://www.instagram.com/yokk1e" target="_blank">
              <Icon symbol="instagram" />
            </a>
          </Social>
        </SocialGroups>
        <UnderLine></UnderLine>
      </SocialContainer>
      <CreditContainer>
        <CreditWapper>
          <CreditGroup>
            <CreditText>Build with Nextjs and styled-components</CreditText>
            <CreditText>© 2022 Satthabut</CreditText>
          </CreditGroup>
        </CreditWapper>
      </CreditContainer>
    </FooterContainer>
  );
}
