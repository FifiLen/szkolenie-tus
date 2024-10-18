import { Triangle } from "lucide-react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function TrainingDescription() {
  return (
    <section id="o-szkoleniu" className={`py-16 bg-white ${dmSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl font-bold text-black mb-12 text-center tracking-tight">
          Trener Treningu Umiejętności Społecznych (TUS)
        </h3>
        <div className="bg-gray-100 rounded-3xl p-8 mb-16">
          <Triangle className="h-16 w-16 text-indigo-400 mb-6" />
          <h4
            className={`text-3xl font-bold text-black mb-4 ${dmSans.className}`}
          >
            Stopień I - Dzieci, Stopień II - Młodzież i Dorośli
          </h4>
          <p className={`text-lg text-gray-700 ${dmSans.className}`}>
            Zapraszamy serdecznie do udziału w szkoleniu &quot;Trener Treningu
            Umiejętności Społecznych (TUS)&ldquo;, które ma na celu
            wszechstronne przygotowanie uczestników do pracy z osobami
            wymagającymi wsparcia w rozwijaniu kompetencji
            społeczno-emocjonalnych. Szkolenie oferuje szczegółowe zapoznanie
            się z metodą TUS oraz pogłębienie wiedzy z zakresu psychologii
            rozwoju dzieci, młodzieży i dorosłych, szczególnie w kontekście
            deficytów społecznych.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 rounded-3xl p-8">
            <h4
              className={`text-3xl font-bold text-black mb-4 ${dmSans.className}`}
            >
              Wyzwania Społeczne
            </h4>
            <p className={`text-lg text-gray-700 ${dmSans.className}`}>
              Obecnie coraz więcej dzieci, młodzieży oraz osób dorosłych zmaga
              się z problemami w obszarze relacji interpersonalnych,
              trudnościami w regulacji emocji oraz nadmiernym skupieniem na
              sobie, co prowadzi do wycofania z interakcji społecznych. Nasze
              szkolenie odpowiada na te wyzwania, oferując praktyczne narzędzia
              do natychmiastowego zastosowania w pracy terapeutycznej lub
              wychowawczej.
            </p>
          </div>
          <div className="bg-green-100 rounded-3xl p-8">
            <h4
              className={`text-3xl font-bold text-black mb-4 ${dmSans.className}`}
            >
              Cele Szkolenia
            </h4>
            <p className={`text-lg text-gray-700 ${dmSans.className}`}>
              Celem szkolenia jest poprawa umiejętności społecznych uczestników
              oraz wsparcie ogólnego dobrostanu emocjonalnego dzieci, młodzieży
              i dorosłych. Uczestnicy zdobywają praktyczne narzędzia, które mogą
              być wdrożone w pracy z różnymi grupami wiekowymi, co pomaga w
              budowaniu lepszych relacji i poprawie jakości życia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
