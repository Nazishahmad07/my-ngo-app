import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Clean Water Initiative",
      description:
        "Providing clean water solutions to rural communities facing water scarcity and contamination issues.",
      image: "/placeholder.svg?height=300&width=600",
      link: "/programs/clean-water",
      stats: [
        { value: "250+", label: "Water Wells" },
        { value: "500K+", label: "People with Access" },
        { value: "15", label: "Countries" },
      ],
    },
    {
      title: "Education for All",
      description: "Building schools and providing educational resources to underserved communities around the world.",
      image: "/placeholder.svg?height=300&width=600",
      link: "/programs/education",
      stats: [
        { value: "100+", label: "Schools Built" },
        { value: "50K+", label: "Students Reached" },
        { value: "12", label: "Countries" },
      ],
    },
    {
      title: "Healthcare Access",
      description: "Improving access to quality healthcare services in remote and underserved regions.",
      image: "/placeholder.svg?height=300&width=600",
      link: "/programs/healthcare",
      stats: [
        { value: "75+", label: "Clinics Supported" },
        { value: "200K+", label: "Patients Treated" },
        { value: "10", label: "Countries" },
      ],
    },
    {
      title: "Sustainable Agriculture",
      description: "Promoting sustainable farming practices to improve food security and economic opportunities.",
      image: "/placeholder.svg?height=300&width=600",
      link: "/programs/agriculture",
      stats: [
        { value: "5K+", label: "Farmers Trained" },
        { value: "150+", label: "Communities Served" },
        { value: "8", label: "Countries" },
      ],
    },
    {
      title: "Women's Empowerment",
      description: "Supporting women through education, entrepreneurship, and leadership development programs.",
      image: "/placeholder.svg?height=300&width=600",
      link: "/programs/women-empowerment",
      stats: [
        { value: "10K+", label: "Women Supported" },
        { value: "1K+", label: "Businesses Started" },
        { value: "9", label: "Countries" },
      ],
    },
    {
      title: "Environmental Conservation",
      description:
        "Protecting natural resources and promoting sustainable environmental practices in vulnerable ecosystems.",
      image: "/placeholder.svg?height=300&width=600",
      link: "/programs/environment",
      stats: [
        { value: "100K+", label: "Trees Planted" },
        { value: "50+", label: "Protected Areas" },
        { value: "7", label: "Countries" },
      ],
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Programs</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Discover how we're making a difference through our key initiatives around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:grid md:grid-cols-2 md:gap-6">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 py-4">
                        {program.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="flex flex-col items-center justify-center text-center">
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={program.link} className="w-full">
                        <Button className="w-full">Learn More</Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Get Involved</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                There are many ways to support our programs and help us create lasting change.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/donate">
                <Button size="lg" className="px-8">
                  Donate Now
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="px-8">
                  Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

