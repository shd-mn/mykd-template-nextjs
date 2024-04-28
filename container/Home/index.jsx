import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import OurTeam from "./OurTeam";
import Steamer from "./Steamer";
import Community from "./Community";
import TopTrending from "./TopTrending";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Steamer />
      <OurTeam />
      <Community />
      <TopTrending />
    </main>
  );
}
