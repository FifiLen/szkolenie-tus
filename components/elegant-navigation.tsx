"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DM_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function ElegantNavigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(
    () => [
      { label: "O Szkoleniu", link: "o-szkoleniu" },
      { label: "Zakres Szkolenia", link: "zakres-szkolenia" },
      { label: "Prowadzący", link: "prowadzacy" },
      { label: "Grupa Docelowa", link: "grupa-docelowa" },
      { label: "Benefity", link: "benefity" },
      { label: "Galeria", link: "galeria" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);

    // Check which section is currently in view
    navItems.forEach(({ link }) => {
      const section = document.getElementById(link);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(link);
        }
      }
    });
  }, [lastScrollY, navItems]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-zinc-50 ${dmSans.className}`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("o-szkoleniu")}
          >
            <span className="text-2xl font-black text-zinc-800 tracking-tight">
              MAGNOLIA
            </span>
          </motion.div>

          {/* Centered Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center justify-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.link)}
                  className={`text-zinc-700 font-semibold hover:text-zinc-900 relative text-sm ${
                    activeSection === item.link ? "text-black" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.1 },
                    }),
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {item.label}
                  {activeSection === item.link && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      layoutId="underline"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <Button
              className={`${dmSans.className} rounded-full font-semibold hidden sm:inline-flex`}
              onClick={() => scrollToSection("zapisz-sie")}
            >
              Zapisz się
            </Button>
            <div className="lg:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                  {isOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.link)}
                  className={`block w-full text-left text-zinc-700 hover:text-zinc-900 py-2 ${
                    activeSection === item.link ? "font-bold" : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                className="mt-4 w-full px-4 py-2 rounded-md bg-black hover:bg-zinc-800 text-white font-medium text-sm transition-all duration-300 ease-in-out"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("zapisz-sie")}
              >
                Zapisz się
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
