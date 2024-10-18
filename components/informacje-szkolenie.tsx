"use client";
import { Triangle } from "lucide-react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function TrainingScope() {
  return (
    <section className={`pb-14 bg-white ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gray-100 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Triangle className="h-16 w-16 text-indigo-400 mb-6" />
          <h4
            className={`text-3xl font-bold text-gray-900 mb-4 ${dmSans.className}`}
          >
            Szkolenie obejmować będzie pracę z:
          </h4>
          <ul
            className={`list-disc list-inside text-lg text-gray-700 mb-8 ${dmSans.className}`}
          >
            <li>Dziećmi powyżej 4. roku życia</li>
            <li>Młodzieżą</li>
            <li>Dorosłymi</li>
            <li>Osobami z niepełnosprawnościami intelektualnymi</li>
            <li>Osobami starszymi z zaburzeniami neurologicznymi</li>
          </ul>
          <p className={`text-lg text-gray-700 ${dmSans.className}`}>
            Szczególną uwagę poświęcamy również pracy z osobami z zaburzeniami
            ze spektrum autyzmu, ADHD, mutyzmem wybiórczym oraz zespołem FASD.
          </p>
        </motion.div>

        <motion.div
          className="bg-green-100 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Triangle className="h-16 w-16 text-green-400 mb-6" />
          <h4
            className={`text-3xl font-bold text-gray-900 mb-4 ${dmSans.className}`}
          >
            Autorska Metodologia
          </h4>
          <p className={`text-lg text-gray-700 ${dmSans.className}`}>
            Szkolenie opiera się na autorskiej metodologii stworzonej przez
            osoby, które od lat pracują nad doskonaleniem narzędzi wspierających
            rozwój społeczny dzieci, młodzieży oraz osób dorosłych. Uczestnicy
            mają dostęp do bogatej bazy materiałów edukacyjnych, scenariuszy
            zajęć, kart pracy oraz artykułów, które pomogą skutecznie wdrożyć
            zdobytą wiedzę w codziennej praktyce.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
