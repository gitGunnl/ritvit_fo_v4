
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { siteUrl } from "@/lib/seo";

const VegleidingLaearar = () => {
  useEffect(() => {
    // Immediately redirect to the PDF file
    window.location.href = "/other_media/vegleiding-laearar.pdf";
  }, []);

  return (
    <>
      <SEO
        title="Vegleiðing Lærarar - Vitlíkisstovan"
        description="PDF vegleiðing til lærarar."
        url={`${siteUrl}/vegleiding-laearar`}
      />
    <div className="min-h-screen flex items-center justify-center bg-background text-text">
      <div className="text-center">
        <p className="text-lg">Redirecting to PDF...</p>
      </div>
    </div>
    </>
  );
};

export default VegleidingLaearar;
