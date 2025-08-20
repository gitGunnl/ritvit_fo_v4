import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Home } from "lucide-react"
import SEO from "@/components/SEO"
import { siteUrl } from "@/lib/seo"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <SEO
        title="Síða ikki funnin - Vitlíkisstovan"
        description="Síðan finst ikki."
        url={`${siteUrl}/404`}
      />
    <div className="min-h-screen flex items-center justify-center bg-background text-text">
      <div className="text-center animate-fade-up">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-text/60 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/")} size="lg" className="bg-primary hover:bg-primary/80 text-text">
          <Home className="mr-2" /> Back to Home
        </Button>
      </div>
    </div>
    </>
  )
}
