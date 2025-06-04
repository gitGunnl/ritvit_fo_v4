
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const VegleidingLaearar = () => {
  const pdfUrl = "/other_media/Vegleiðing - Lærarar.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Vegleiðing - Lærarar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-24 animate-fade-up">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Vegleiðing - Lærarar
            </h1>
            <p className="text-text/80 max-w-2xl mx-auto">
              Leiðbeining og tilfeingi fyri lærarar
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <Button onClick={handleDownload} className="bg-primary hover:bg-primary/80 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Tak niður PDF
            </Button>
          </div>

          <div className="bg-primary/5 rounded-lg border border-border overflow-hidden">
            <div className="p-4 bg-primary/10 border-b border-border flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium">Vegleiðing - Lærarar.pdf</span>
            </div>
            
            <div className="relative" style={{ height: "80vh" }}>
              <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                className="border-0"
                title="Vegleiðing - Lærarar PDF"
              >
                <div className="p-8 text-center">
                  <p className="text-text/60 mb-4">
                    Tín kagi kann ikki vísa PDF fílur beinleiðis.
                  </p>
                  <Button onClick={handleDownload} className="bg-primary hover:bg-primary/80">
                    <Download className="h-4 w-4 mr-2" />
                    Tak niður fyri at lesa
                  </Button>
                </div>
              </iframe>
            </div>
          </div>

          <div className="mt-6 text-center text-text/60 text-sm">
            <p>
              Um tú hevur trupulleikar við at síggja dokumentið, royn at taka tað niður og opna tað í einum PDF lesara.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VegleidingLaearar;
