import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MagazinesBlogs from "./MagazinesBlogs";
import { navigateTo } from "../utils/router";
import { ArrowLeft } from "lucide-react";

function MagazinesBlogsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-slate overflow-x-clip">
      <Navbar />

      <main className="py-6 sm:py-10">
        <div className="section-shell max-w-6xl mx-auto mb-4">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigateTo("/")}
            className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate transition hover:border-moss hover:bg-white hover:text-moss shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </motion.button>
        </div>

        {/* Magazines Full Component */}
        <MagazinesBlogs />
      </main>

      <Footer />
    </div>
  );
}

export default MagazinesBlogsPage;
