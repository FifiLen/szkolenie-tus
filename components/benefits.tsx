import { Triangle, WavesIcon } from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function CourseCurriculum() {
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
    <section
      id="zakres-szkolenia"
      className={`py-16 bg-white ${dmSans.className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
            Poznaj Zakres Szkolenia
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-600 max-w-xl">
              Szkolenie prowadzone jest przez doświadczonych praktyków, którzy
              na co dzień pracują z dziećmi, młodzieżą oraz osobami dorosłymi,
              wymagającymi wsparcia w rozwoju społecznym. Dzięki licznym
              przykładom z praktyki, uczestnicy mają możliwość zapoznania się z
              realnymi wyzwaniami, z jakimi mogą się spotkać, a także z
              efektywnymi sposobami ich rozwiązywania.
            </p>
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
      </div>
    </section>
  );
}
