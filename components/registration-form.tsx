"use client";

import { useState } from "react";
import Image from "next/image";
import { DM_Sans, DM_Mono } from "next/font/google";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"] });

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Formularz został wysłany!");
  };

  return (
    <section
      id="zapisz-sie"
      className={`py-24 bg-transparent ${dmSans.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tighter">
          Zapisz się na <span className="text-primary">szkolenie</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">
                  Formularz rejestracji
                </CardTitle>
                <CardDescription>
                  Wypełnij poniższy formularz, aby zarezerwować miejsce na
                  szkoleniu TUS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Imię</Label>
                      <Input id="firstName" placeholder="Jan" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nazwisko</Label>
                      <Input id="lastName" placeholder="Kowalski" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Adres e-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jan.kowalski@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Numer telefonu</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+48 123 456 789"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profession">Zawód</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Wybierz zawód" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="psycholog">Psycholog</SelectItem>
                          <SelectItem value="pedagog">Pedagog</SelectItem>
                          <SelectItem value="terapeuta">Terapeuta</SelectItem>
                          <SelectItem value="nauczyciel">Nauczyciel</SelectItem>
                          <SelectItem value="inny">Inny</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Doświadczenie w TUS</Label>
                      <Textarea
                        id="experience"
                        placeholder="Opisz krótko swoje doświadczenie w prowadzeniu TUS (jeśli posiadasz)"
                      />
                    </div>
                  </div>
                  <CardFooter className="flex justify-end pt-6">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Wysyłanie...
                        </>
                      ) : (
                        "Zapisz się"
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-full w-full min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Ilustracja szkolenia TUS"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className={`text-white ${dmMono.className}`}>
                  <h3 className="text-2xl font-bold mb-2">Dołącz do nas!</h3>
                  <p className="text-lg">
                    Rozwiń swoje umiejętności w prowadzeniu Treningu
                    Umiejętności Społecznych
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
