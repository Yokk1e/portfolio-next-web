import Link from "next/link";
import {
  Container,
  Main,
  Title,
  Description,
} from "../components/sharedstyles";

export default function Blogs() {
  return (
    <Container>
      <Main>
        <Title>Coming soon</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </Description>
      </Main>
    </Container>
  );
}
