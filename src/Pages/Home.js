import {
  About,
  Values,
  Navbar,
  Services,
  HeroSection,
  Mission,
  Culture,
  History,
  Contact,
  Footer,
} from "../components";

const Home = () => {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Values />
      <Mission />
      <Culture />
      <History />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
