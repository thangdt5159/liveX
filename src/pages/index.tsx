import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Section1 from "../components/Section1";
import Roadmap from "../components/Roadmap";
import Staking from "../components/Staking";
import Swap from "../components/Swap";
import Bridge from "../components/Bridge";
import Partners from "../components/Partners";
import FAQ from "../components/faq/FAQ";
import AboutUs from "../components/aboutUs/AboutUs";

export default function Home() {
  return (
    <main className="bg-[#1f2227] text-white">
      <Navbar />
      <Header />
      <Section1 />
      <AboutUs />
      <Roadmap />
      <Staking />
      <Swap />
      <Bridge />
      <FAQ />
      <Partners />
    </main>
  );
}
