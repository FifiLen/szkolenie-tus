import { WavesIcon } from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function TargetAudience() {
  const audienceDetails = [
    {
      title: "Nauczyciele i Pedagodzy",
      description:
        "Szkolenie skierowane jest do nauczycieli i pedagogów, którzy chcą poszerzyć swoje kompetencje w pracy z dziećmi i młodzieżą wymagającą wsparcia w rozwoju społeczno-emocjonalnym.",
      icon: WavesIcon,
      iconColor: "text-blue-400",
    },
    {
      title: "Psycholodzy i Terapeuci",
      description:
        "Zapraszamy psychologów, terapeutów zajęciowych oraz logopedów, którzy pracują w obszarze wsparcia społeczno-emocjonalnego i pragną rozwijać swoje umiejętności.",
      icon: WavesIcon,
      iconColor: "text-green-400",
    },
    {
      title: "Studenci i Rodzice",
      description:
        "Szkolenie jest również idealne dla studentów kierunków pedagogicznych oraz rodziców, którzy pragną skuteczniej wspierać rozwój swoich dzieci.",
      icon: WavesIcon,
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section
      id="grupa-docelowa"
      className={`py-16 bg-white ${dmSans.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl font-bold text-black mb-12 tracking-tight">
          Grupa Docelowa
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceDetails.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-3xl p-8">
              <item.icon className={`h-16 w-16 ${item.iconColor} mb-6`} />
              <h4
                className={`text-3xl font-bold text-black mb-4 ${dmSans.className}`}
              >
                {item.title}
              </h4>
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
