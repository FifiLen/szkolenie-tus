import { ArrowRight, Triangle, WavesIcon } from "lucide-react";
import { DM_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function CourseCurriculum() {
  const features = [
    "Zaświadczenie zgodne z MEN",
    "Akredytowana Placówka",
    "Dostęp do bazy scenariuszy",
    "24 godziny szkoleniowe",
  ];

  const curriculumDetails = [
    {
      title: "Diagnoza deficytów społecznych",
      description:
        "Poznasz metody diagnozowania deficytów społecznych oraz techniki doboru uczestników do grup TUS, aby zapewnić jak najlepsze efekty terapeutyczne.",
      icon: Triangle,
      iconColor: "text-indigo-400",
    },
    {
      title: "Planowanie i prowadzenie zajęć",
      description:
        "Dowiesz się, jak planować i prowadzić zajęcia z zakresu TUS, uwzględniając różnorodne formy wsparcia dla poszczególnych grup wiekowych.",
      icon: WavesIcon,
      iconColor: "text-green-400",
    },
    {
      title: "Radzenie sobie z trudnymi zachowaniami",
      description:
        "Zdobędziesz umiejętności radzenia sobie z trudnymi zachowaniami uczestników, zarówno na poziomie indywidualnym, jak i grupowym.",
      icon: Triangle,
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section className={`py-16 bg-white ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Zostań Trenerem TUS.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
            Poznaj Nasz Szczegółowy Program Szkolenia
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600 max-w-xl">
              Dwustopniowe szkolenie &quot;Trener TUS&ldquo; to aż 24 godziny
              szkoleniowe z jednego poziomu, dostęp do bazy scenariuszy zajęć
              oraz zamkniętej grupy trenerów TUS.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 text-lg">
              Zapisz się
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {curriculumDetails.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-3xl p-8">
              <item.icon className={`h-16 w-16 ${item.iconColor} mb-6`} />
              <h3
                className={`text-3xl font-bold text-black mb-4 ${dmSans.className}`}
              >
                {item.title}
              </h3>
              <p className={`text-lg text-gray-700 ${dmSans.className}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black mb-6">
            Nasze Kluczowe Funkcje Specjalnie dla Ciebie
          </h3>
          <div className="flex flex-wrap gap-4">
            {features.map((feature, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-gray-100 text-black hover:bg-gray-200 rounded-full px-6 py-3 text-lg"
              >
                {feature}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
