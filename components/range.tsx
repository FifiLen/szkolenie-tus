"use client";
import { DM_Sans, DM_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

export default function CourseScope() {
  const topics = [
    {
      title: "Diagnoza i dobór uczestników",
      description:
        "Diagnoza deficytów społecznych oraz dobór uczestników do grup TUS.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Planowanie i prowadzenie zajęć",
      description:
        "Planowanie i prowadzenie zajęć TUS dla różnych grup wiekowych.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Zarządzanie trudnymi zachowaniami",
      description: "Radzenie sobie z trudnymi zachowaniami uczestników.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section className={`py-24 bg-transparent to-gray-100 ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center tracking-tighter">
          Zakres <span className="text-primary">szkolenia</span>
        </h2>
        <p
          className={`text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto ${dmMono.className} tracking-tight`}
        >
          Podczas szkolenia uczestnicy zdobędą kluczową wiedzę i umiejętności
          związane z:
        </p>
        <div className="space-y-24">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:order-first" : "md:order-last"
                }`}
              >
                <Image
                  src={topic.image}
                  alt={topic.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3
                  className={`text-3xl font-bold text-gray-900 mb-4 ${dmMono.className}`}
                >
                  {topic.title}
                </h3>
                <p
                  className={`text-xl text-gray-600 ${dmMono.className} tracking-tight`}
                >
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
