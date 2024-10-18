import { CheckCircle } from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function KeyFeatures() {
  const features = [
    {
      title: "Zaświadczenia zgodne z MEN",
      description:
        "Zaświadczenia są zgodne z wzorem MEN, które wystawiamy jako Akredytowana Niepubliczna Placówka Doskonalenia Nauczycieli.",
      iconColor: "text-green-400",
      size: "lg",
    },
    {
      title: "24 godziny szkoleniowe",
      description:
        'Dwustopniowe szkolenie "Trener TUS" to aż 24 godziny szkoleniowe z jednego poziomu!',
      iconColor: "text-blue-400",
      size: "sm",
    },
    {
      title: "Planowanie i przeprowadzanie zajęć",
      description:
        "Dowiesz się, jak zaplanować, przygotować oraz przeprowadzić zajęcia treningu umiejętności społecznych dzieci, młodzieży i osób dorosłych (w zależności od wybranego wariantu szkolenia).",
      iconColor: "text-purple-400",
      size: "lg",
    },
    {
      title: "Baza scenariuszy zajęć",
      description:
        "Uzyskasz dostęp do bazy scenariuszy zajęć TUS oraz materiałów w formie elektronicznej.",
      iconColor: "text-indigo-400",
      size: "sm",
    },
    {
      title: "Baza TRENERÓW TUS",
      description:
        "Uzyskasz dostęp do bazy TRENERÓW TUS nie tylko z terenu Polski.",
      iconColor: "text-yellow-400",
      size: "sm",
    },
    {
      title: "Zamknięta grupa TRENERÓW TUS",
      description:
        "Uzyskasz dostęp do zamkniętej grupy TRENERÓW TUS, co umożliwia wymianę doświadczeń i wsparcie merytoryczne.",
      iconColor: "text-red-400",
      size: "sm",
    },
  ];

  return (
    <section id="benefity" className={`py-16 bg-white ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl font-bold text-black mb-12 text-center tracking-tight">
          Kluczowe Funkcje Szkolenia TUS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-3xl p-8 flex flex-col justify-between ${
                feature.size === "lg" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div>
                <CheckCircle
                  className={`h-12 w-12 ${feature.iconColor} mb-6`}
                />
                <h4
                  className={`text-2xl font-bold text-black mb-4 ${dmSans.className}`}
                >
                  {feature.title}
                </h4>
                <p className={`text-base text-gray-700 ${dmSans.className}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
