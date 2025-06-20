import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedProjects() {
  const projects = [
    {
      title: "Clean Water Initiative",
      description:
        "Providing clean water solutions to rural communities facing water scarcity and contamination issues.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/programs/clean-water",
    },
    {
      title: "Education for All",
      description: "Building schools and providing educational resources to underserved communities around the world.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/programs/education",
    },
    {
      title: "Healthcare Access",
      description: "Improving access to quality healthcare services in remote and underserved regions.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/programs/healthcare",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Programs</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how we're making a difference through our key initiatives around the world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover w-full h-48" />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={project.link} className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/programs">
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

