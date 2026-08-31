import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import Founders from "./components/Founders";
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
        <Services />
        <SafeSpacePromise />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
