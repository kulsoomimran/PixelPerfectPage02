import Hero from "./components/hero"
import Project from "./components/project"
import Extension from "./components/extension";
import Customise from "./components/customise";
import YourWork from "./components/yourWork";
import OurSponsors from "./components/ourSponsors"

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <div className="my-[700px]"></div>
      <Extension />
      <Customise />
      <YourWork />
      <OurSponsors />
    </div>
  );
};