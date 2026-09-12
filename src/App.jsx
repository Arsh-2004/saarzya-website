import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSaarzya from "./components/AboutSaarzya";
import VisionMission from "./components/VisionMission";
import WhyWeBuiltThis from "./components/WhyWeBuiltThis";
import Services from "./components/Services";
import MagazinesBlogs from "./components/MagazinesBlogs";
import SafeSpacePromise from "./components/SafeSpacePromise";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import AdminPortal from "./components/admin/AdminPortal";
import FullMagazineReaderPage from "./components/FullMagazineReaderPage";
import AboutSaarzyaPage from "./components/AboutSaarzyaPage";
import { usePathname } from "./utils/router";

function App() {
  const pathname = usePathname();

  if (pathname === "/admin" || pathname === "/admin/") {
    return <AdminPortal />;
  }

  if (
    pathname === "/about-saarzya" ||
    pathname === "/about-saarzya/" ||
    pathname === "/about" ||
    pathname === "/about/"
  ) {
    return <AboutSaarzyaPage />;
  }

  if (
    pathname.startsWith("/pdf_reader_magazine") ||
    pathname.startsWith("/magazine-reader") ||
    pathname.startsWith("/pdf-reader")
  ) {
    return <FullMagazineReaderPage />;
  }

  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <AboutSaarzya />
        <VisionMission />
        <WhyWeBuiltThis />
        <Services />
        <MagazinesBlogs />
        <SafeSpacePromise />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
