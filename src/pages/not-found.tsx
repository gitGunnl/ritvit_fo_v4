import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Home } from "lucide-react"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-up">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/")} size="lg">
          <Home className="mr-2" /> Back to Home
        </Button>
      </div>
    </div>
  )
}