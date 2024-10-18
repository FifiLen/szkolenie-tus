import Link from "next/link";
import ElegantNavigation from "./elegant-navigation";
import Hero from "./tus-hero-updated";
import Benefits from "./benefits";
import Instructor from "./trainer";
import RegistrationForm from "./registration-form";
import TargetAudience from "./grupa-docelowa";
import TrainingDescription from "./opis";
import KeyFeatures from "./dodatki";
import TrainingScope from "./informacje-szkolenie";
import TrainingGallery from "./galeria";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ElegantNavigation />
      <main className="flex-1 bg-zinc-50">
        <Hero />
        <TrainingDescription />
        <TrainingScope />
        <Benefits />
        <Instructor />
        <TargetAudience />

        <KeyFeatures />
        <TrainingGallery />
        <RegistrationForm />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 TUS Szkolenia. Wszelkie prawa zastrzeżone.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Polityka prywatności
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Regulamin
          </Link>
        </nav>
      </footer>
    </div>
  );
}
