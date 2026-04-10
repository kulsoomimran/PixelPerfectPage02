import Hero from "./components/hero"
import Project from "./components/project"
import Extension from "./components/extension";
import Customise from "./components/customise";
import YourWork from "./components/yourWork";
import OurSponsors from "./components/ourSponsors"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Project />
      <Extension />
      <Customise />
      <YourWork />
      <OurSponsors />
    </div>
  );
};