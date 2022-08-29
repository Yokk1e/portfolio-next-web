import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./icons";

const MainHeader = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  z-index: 20;
`;

const ContainerHeader = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 95rem;
  margin-left: auto;
  margin-right: auto;
`;

const WapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const WapperHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LinkMain = styled.a`
  text-transform: uppercase;
  font-weight: 900;
  &:hover {
    cursor: pointer;
    color: rgb(59 130 246);
  }

  @media screen and (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const MenuBar = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const WapperMenuBar = styled.div`
  display: flex;
  margin-left: 2.5rem;
`;

interface ActiveProps {
  active: boolean;
}

const LinkMenu = styled.a<ActiveProps>`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "rgb(59 130 246)" : "#424040")};
  &:hover {
    cursor: pointer;
    color: rgb(59 130 246);
  }
`;

const MenuList = styled.div<ActiveProps>`
  z-index: 30;
  @media screen and (min-width: 768px) {
    display: none;
  }
  display: ${(props) => (props.active ? "block" : "none")};
`;

const WapperMenuList = styled.div`
  padding-bottom: 0.75rem;
  padding-top: 0.5rem;
  @media screen and (min-width: 640px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const LinkMenuList = styled.a<ActiveProps>`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  display: block;
  cursor: pointer;

  color: ${(props) => (props.active ? "rgb(59 130 246)" : "#424040")};

  &:hover {
    color: rgb(59 130 246);
  }
`;

const WapperIcon = styled.div`
  z-index: 20;
  margin-right: -0.5rem;
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ButtonIcon = styled.button`
  padding: 0.5rem;
  align-items: center;
  background-color: transparent;
  background-image: none;
  border: 0 solid #e5e7eb;
  cursor: pointer;
`;

export function Header() {
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);

  const toggleNavBar = useCallback(() => {
    setActive((isActive) => !isActive);
  }, []);

  useEffect(() => {
    setActive(false);
  }, [router.pathname]);

  return (
    <MainHeader>
      <ContainerHeader>
        <WapperHeader>
          <WapperHeaderContent>
            <Link href="/">
              <LinkMain>satthabut</LinkMain>
            </Link>
            <MenuBar>
              <WapperMenuBar>
                <Link href="/">
                  <LinkMenu active={router.pathname == "/"}>Home</LinkMenu>
                </Link>
                <Link href="/about">
                  <LinkMenu active={router.pathname == "/about"}>
                    About
                  </LinkMenu>
                </Link>
                <Link href="/blogs">
                  <LinkMenu active={router.pathname == "/blogs"}>
                    Blogs
                  </LinkMenu>
                </Link>
              </WapperMenuBar>
            </MenuBar>
          </WapperHeaderContent>
          <WapperIcon>
            <ButtonIcon onClick={toggleNavBar}>
              <Icon symbol="hamburger" />
            </ButtonIcon>
          </WapperIcon>
        </WapperHeader>
        <MenuList active={active}>
          <WapperMenuList>
            <Link href="/">
              <LinkMenuList active={router.pathname == "/"}>Home</LinkMenuList>
            </Link>
            <Link href="/about">
              <LinkMenuList active={router.pathname == "/about"}>
                About
              </LinkMenuList>
            </Link>
            <Link href="/blogs">
              <LinkMenuList active={router.pathname == "/blogs"}>
                Blogs
              </LinkMenuList>
            </Link>
          </WapperMenuList>
        </MenuList>
      </ContainerHeader>
    </MainHeader>
  );
}
