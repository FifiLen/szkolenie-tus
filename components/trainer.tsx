"use client";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Instructor() {
  return (
    <section
      id="prowadzacy"
      className={`py-24 bg-transparent to-white ${dmSans.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tighter">
          Poznaj <span className="text-primary">prowadzącego</span>
        </h2>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="md:w-1/3 relative h-96 md:h-auto"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/trener-tus.jpg"
                  alt="Zdjęcie Jana Kowalskiego"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
              <motion.div
                className="md:w-2/3 p-8 md:p-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3
                  className={`text-3xl font-bold text-gray-900 mb-4 ${dmSans.className}`}
                >
                  mgr Bogusław Barański
                </h3>
                <p
                  className={`text-lg text-gray-700 mb-4 ${dmSans.className} tracking-tight`}
                >
                  Psychoterapeuta, seksuolog, mentor.
                  <br /> <br /> 20 letnie doświadczenie w pracy indywidualnej
                  oraz z grupami mężczyzn, kobiet nad relacjami w związkach,
                  prowadząc sesje i warsztaty w Polsce, Szwecji i w Niemczech.
                  Terapiach indywidualnych, terapii par, rodzin, dzieci.
                </p>
                <p
                  className={`text-lg text-gray-700 mb-4 ${dmSans.className} tracking-tight`}
                >
                  Psychoterapeuta systemowy wykorzystuje podejście integratywne,
                  korzystając z różnych nurtów, które służą pacjentowi,
                  prowadząc go do świadomego zrozumienia siebie. Jednym z
                  ulubionych nurtów psychoterapii jest logoterapia Frankla, w
                  której podąża wraz pacjentem do odkrycia i zrozumienia sensu.
                  Specjalizuje się w terapii par, interwencji kryzysowej,
                  uzależnieniach, trudnościach w relacjach, problemach
                  związanych z tożsamością, zaburzeniach lękowych i depresyjnych
                  oraz problemach seksualnych.
                </p>

                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
