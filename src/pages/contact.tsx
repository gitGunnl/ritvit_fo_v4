import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MessageSquare, User } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const formSchema = z.object({
  name: z.string().min(2, "Navnet skal være mindst 2 tegn"),
  email: z.string().email("Indtast venligst en gyldig e-mail-adresse"),
  message: z.string().min(10, "Beskeden skal være mindst 10 tegn"),
})

export default function Kontakt() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Besked sendt!",
      description: "Vi vender tilbage hurtigst muligt.",
    })
    form.reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      <Navigation />
      <div className="py-20">
        <div className="container px-4 mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-6 animate-fade-down bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Kontakt os
          </h1>
          <p className="text-lg text-center mb-8 text-gray-300">
            Vi vil rigtig gerne høre fra dig! Du kan kontakte os direkte via telefon, e-mail eller på sociale medier, eller du kan sende os en besked via formularen nedenfor. Vi ser frem til at hjælpe dig.
          </p>

          {/* Direct Contact Information */}
          <div className="bg-black/30 p-6 rounded-lg mb-12 text-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Kontakt os direkte</h2>
            <p className="mb-2">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+298XXXXXX" className="underline hover:text-white">
                +298 XX XX XX
              </a>
            </p>
            <p className="mb-2">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:info@tøkni.tænastan.fo" className="underline hover:text-white">
                info@tøkni.tænastan.fo
              </a>
            </p>
            <p className="mb-2">
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/ditfirma"
                className="underline hover:text-white"
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
                className="underline hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/company/ditfirma
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <Card className="p-6 glass-card animate-fade-up bg-black/30 border-white/10 hover:border-purple-500/30 transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Foretrækker du at sende en besked?
            </h2>
            <p className="mb-6 text-gray-300">
              Brug formularen nedenfor, så kontakter vi dig hurtigst muligt.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Navn</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input {...field} placeholder="Dit navn" className="pl-10" />
                          <User className="absolute left-3 top-2.5 h-5 w-5 text-violet-600" />
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
                      <FormLabel className="text-gray-300">E-mail</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input {...field} type="email" placeholder="Din e-mail" className="pl-10" />
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-indigo-600" />
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
                      <FormLabel className="text-gray-300">Besked</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea {...field} placeholder="Skriv din besked her" className="min-h-[150px] pl-10" />
                          <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-violet-600" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
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
  )
}
