import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Section1 from "../components/Section1";
import Roadmap from "../components/Roadmap";
import Staking from "../components/Staking";
import Swap from "../components/Swap";
import Bridge from "../components/Bridge";
import Partners from "../components/Partners";
import FAQ from "../components/faq/FAQ";
import AboutUs from "../components/aboutUs/AboutUs";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <main className="bg-[#1f2227] text-white font-display">
      <Navbar />
      <Landing />
      <Banner />
      {/* <Section1 /> */}
      {/* <AboutUs /> */}
      <Roadmap />
      <Staking />
      <Swap />
      <Bridge />
      <FAQ />
      <Partners />
    </main>
  );
}
