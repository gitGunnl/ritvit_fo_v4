
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

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf8FFci-J91suIjxY2xh4GD-DQ-UfZftUNxq3dUdXkgJAjB1Q/formResponse";
    
    try {
      const formData = new FormData();
      formData.append("entry.1179687836", values.name);
      formData.append("entry.263197538", values.email);
      formData.append("entry.240567695", values.message);
      
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", // Required to avoid CORS errors
        body: formData,
      });
      
      toast({
        title: "Besked sendt!",
        description: "Vi vender tilbage hurtigst muligt.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Villa!",
        description: "Tað eydnaðist ikki at senda boðini. Royn aftur ella send teldupost til info@ritvit.fo",
        variant: "destructive",
      });
    }
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
            Vit vilja fegin hoyra frá tær! Tú kanst seta teg í samband við okkum beinleiðis umvegis telefon, teldupost ella á sosialum miðlum, ella tú kanst senda okkum
            eini boð gjøgnum teigarnar niðanfyri. Vit gleða okkum til at hjálpa tær.
          </p>

          {/* Direct Contact Information */}
          <div className="bg-primary/10 p-6 rounded-lg mb-12 text-text/80">
            <h2 className="text-2xl font-semibold mb-4">Beinleiðis samband:</h2>
            <p className="mb-2">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+298 919444" className="underline hover:text-primary">
                +298 919444
              </a>
            </p>
            <p className="mb-2">
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:info@ritvit.fo"
                className="underline hover:text-primary"
              >
                info@ritvit.fo
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61557593776267"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/tøkni-tænastan"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-primary/10 border border-border hover:border-primary transition-all animate-fade-up">
            <h2 className="text-2xl font-semibold mb-4 text-text/80">
              Vil tú heldur senda eini boð?
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="entry.1179687836"  // Updated field name
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text/80">Navn</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            placeholder="Títt navn"
                            className="pl-10"
                          />
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="entry.263197538"  // Updated field name
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text/80">Teldupost</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type="email"
                            placeholder="Tín teldupostur"
                            className="pl-10"
                          />
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="entry.240567695"  // Updated field name
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-text/80">Boð</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            {...field}
                            placeholder="Skriva tíni boð"
                            className="min-h-[150px] pl-10"
                          />
                          <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-text"
                >
                  Send boð
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
