import { Footer } from "../components/footer";
import { HighlightSkills } from "../components/highlight-skill";
import { Introduce } from "../components/introduce";

export default function About() {
  return (
    <div>
      <Introduce />
      <HighlightSkills />
      <Footer />
    </div>
  );
}
