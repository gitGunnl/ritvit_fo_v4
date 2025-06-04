
import { useEffect } from "react";

const VegleidingLaearar = () => {
  useEffect(() => {
    // Immediately redirect to the PDF file
    window.location.href = "/other_media/vegleiding-laearar.pdf";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text">
      <div className="text-center">
        <p className="text-lg">Redirecting to PDF...</p>
      </div>
    </div>
  );
};

export default VegleidingLaearar;
