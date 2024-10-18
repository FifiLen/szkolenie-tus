import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { DM_Sans, DM_Mono } from "next/font/google";
import Image from "next/image";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div
      className={`bg-white min-h-screen flex items-center justify-center p-4 pt-16 ${dmSans.className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Lewa kolumna z treścią */}
          <div className="md:w-1/2 md:pr-8">
            <div className="text-center md:text-left mb-12">
              <h1 className="text-7xl font-black text-black tracking-tighter mb-6">
                Zostań Certyfikowanym Trenerem TUS{" "}
              </h1>
              <p
                className={`text-xl text-zinc-700 mb-8 ${dmSans.className} tracking-tight pr-16`}
              >
                Szybkie, przyjazne i angażujące szkolenie TUS - przekształć
                swoje podejście do rozwijania kompetencji
                społeczno-emocjonalnych u dzieci, młodzieży i dorosłych.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <button className="bg-black text-white rounded-full py-4 px-8 flex items-center justify-between w-full sm:w-auto relative mb-4 sm:mb-0">
                  <span className="flex-grow text-center pr-12 tracking-tight text-xl">
                    Zapisz się
                  </span>
                  <div className="bg-white rounded-full p-3 flex items-center justify-center absolute right-3">
                    <ArrowRight className="h-5 w-5 text-black" />
                  </div>
                </button>
                <div className="flex flex-col items-center sm:items-start">
                  <p
                    className={`text-sm text-zinc-600 mb-2 ${dmMono.className}`}
                  >
                    Zadowoleni klienci
                  </p>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image
                        key={i}
                        src={`/assets/avatar.png`}
                        alt={`Avatar ${i}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Prawa kolumna z wideo */}
          <div className="md:w-1/2 md:pl-8">
            <div className="relative aspect-video bg-zinc-200 rounded-lg overflow-hidden shadow-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 text-zinc-800"
                >
                  <Play className="mr-2 h-6 w-6" /> Obejrzyj wprowadzenie
                </Button>
              </div>
              <div className="absolute inset-0 bg-zinc-300 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
