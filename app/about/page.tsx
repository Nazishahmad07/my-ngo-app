import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Hope Foundation</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Learn about our mission, vision, and the team behind our global impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Hope Foundation was established in 2005 by a group of passionate individuals who believed in the power
                of sustainable development to transform communities. What began as a small initiative to provide clean
                water to a single village has grown into a global organization with projects in over 25 countries.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Over the years, we've expanded our focus to include education, healthcare, and environmental
                sustainability, always guided by our core belief that lasting change comes from empowering communities
                to lead their own development.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hope Foundation team working in the field"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission & Vision</h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-muted-foreground md:text-lg/relaxed">
                To empower communities through sustainable development initiatives that address their most pressing
                needs while building local capacity for long-term success.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="text-muted-foreground md:text-lg/relaxed">
                A world where all communities have the resources, knowledge, and opportunity to thrive and determine
                their own futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                These core principles guide our work and decision-making.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                title: "Community-Led",
                description: "We believe that sustainable change must be driven by the communities themselves.",
              },
              {
                title: "Transparency",
                description: "We are committed to openness and accountability in all our operations and finances.",
              },
              {
                title: "Collaboration",
                description:
                  "We work alongside local partners, governments, and other organizations to maximize impact.",
              },
              {
                title: "Innovation",
                description: "We continuously seek new and better ways to address complex development challenges.",
              },
              {
                title: "Respect",
                description: "We honor the dignity, knowledge, and agency of the people and communities we serve.",
              },
              {
                title: "Sustainability",
                description:
                  "We design programs that create lasting positive change and can be maintained by local communities.",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Meet the dedicated professionals working to fulfill our mission.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Executive Director",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Michael Chen",
                role: "Director of Programs",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Amara Okafor",
                role: "Chief Financial Officer",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "David Rodriguez",
                role: "Director of Development",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Priya Patel",
                role: "Communications Manager",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "James Wilson",
                role: "Program Manager",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Fatima Al-Zahrani",
                role: "Regional Director, MENA",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Carlos Mendez",
                role: "Regional Director, Latin America",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                There are many ways to get involved and support our work around the world.
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

