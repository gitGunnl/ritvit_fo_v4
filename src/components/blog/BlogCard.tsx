import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

interface BlogCardProps {
  id: string
  title: string
  description: string
  category: string
  date: string
}

const BlogCard = ({ id, title, description, category, date }: BlogCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
        <Badge variant="secondary">{category}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm text-muted-foreground">{date}</span>
          <Link to={`/blog/${id}`} className="text-sm text-primary hover:underline">
            Read more
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default BlogCard