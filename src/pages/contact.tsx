import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(2, "Navnet skal være mindst 2 tegn"),
  email: z.string().email("Indtast venligst en gyldig e-mail-adresse"),
  message: z.string().min(10, "Beskeden skal være mindst 10 tegn"),
});

export default function Kontakt() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Besked sendt!",
      description: "Vi vender tilbage hurtigst muligt.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <Navigation />
      <div className="py-20">
        <div className="container px-4 mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-down bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Set teg í samband við okkum
          </h1>
          <p className="text-lg text-center mb-8 text-text/80">
                      Vit vilja fegin hoyra frá tær! Tú kanst seta teg í samband við okkum beinleiðis
                      umvegis telefon, teldupost ella á sosialum miðlum, ella tú kanst senda okkum
                      eini boð gjøgnum teigarnar niðanfyri. Vit gleða okkum til at hjálpa tær.
          </p>

          {/* Direct Contact Information */}
          <div className="bg-primary/10 p-6 rounded-lg mb-12 text-text/80">
            <h2 className="text-2xl font-semibold mb-4">Kontakt os direkte</h2>
            <p className="mb-2">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+298XXXXXX" className="underline hover:text-primary">
                +298 XX XX XX
              </a>
            </p>
            <p className="mb-2">
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:info@tøkni.tænastan.fo"
                className="underline hover:text-primary"
              >
                info@tøkni.tænastan.fo
              </a>
            </p>
            <p className="mb-2">
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/ditfirma"
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/ditfirma
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/company/ditfirma"
                className="underline hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/company/ditfirma
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-primary/10 border border-border hover:border-primary transition-all animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4 text-text/80">
              Foretrækker du at sende en besked?
            </h2>
            <p className="mb-6 text-text/80">
              Brug formularen nedenfor, så kontakter vi dig hurtigst muligt.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text/80">Navn</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="Dit navn"
                            className="pl-10"
                          />
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text/80">E-mail</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type="email"
                            placeholder="Din e-mail"
                            className="pl-10"
                          />
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text/80">Besked</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            {...field}
                            placeholder="Skriv din besked her"
                            className="min-h-[150px] pl-10"
                          />
                          <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-text"
                >
                  Send besked
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
