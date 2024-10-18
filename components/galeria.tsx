"use client";

import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function TrainingGallery() {
  const images = [
    "/assets/avatar.png",
    "/assets/avatar.png",

    "/assets/avatar.png",

    "/assets/avatar.png",

    "/assets/avatar.png",

    "/assets/avatar.png",
  ];

  return (
    <section id="galeria" className={`bg-white ${dmSans.className}`}>
      <div className="max-w-full">
        <h3 className="text-5xl font-bold text-gray-900 mb-8 text-center tracking-tight py-12">
          Galeria Szkolenia
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Galeria szkolenia ${index + 1}`}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
