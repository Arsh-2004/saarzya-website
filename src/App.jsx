import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import Founders from "./components/Founders";
import WhyWeBuiltThis from "./components/WhyWeBuiltThis";
import Services from "./components/Services";
import SafeSpacePromise from "./components/SafeSpacePromise";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <VisionMission />
        <Founders />
        <WhyWeBuiltThis />
        <Services />
        <SafeSpacePromise />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
