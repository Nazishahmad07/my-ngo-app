import { VolunteerForm } from "@/components/volunteer-form"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Globe, Heart } from "lucide-react"

export default function VolunteerPage() {
  const opportunities = [
    {
      title: "Field Volunteer",
      description: "Work directly in our program locations to support project implementation and community engagement.",
      commitment: "1-6 months",
      icon: Globe,
    },
    {
      title: "Event Volunteer",
      description: "Help organize and run fundraising events, awareness campaigns, and community outreach activities.",
      commitment: "Flexible, event-based",
      icon: Calendar,
    },
    {
      title: "Skills-Based Volunteer",
      description: "Contribute your professional skills in areas like marketing, design, technology, or finance.",
      commitment: "Flexible, project-based",
      icon: Users,
    },
    {
      title: "Virtual Volunteer",
      description:
        "Support our mission remotely through research, content creation, translation, or administrative tasks.",
      commitment: "Flexible, remote",
      icon: Heart,
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Volunteer With Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Join our global community of volunteers and help us create lasting change in communities around the
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Why Volunteer?</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Volunteering with Hope Foundation is a rewarding experience that allows you to make a tangible
                difference in the lives of others while developing new skills and connections. Our volunteers are
                essential to our mission and work alongside our team to implement programs, raise awareness, and support
                communities in need.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Benefits of Volunteering</h3>
                <ul className="space-y-2 text-muted-foreground md:text-lg/relaxed list-disc pl-6">
                  <li>Make a meaningful impact in communities facing challenges</li>
                  <li>Gain valuable experience in international development</li>
                  <li>Develop new skills and enhance your resume</li>
                  <li>Connect with like-minded individuals from around the world</li>
                  <li>Experience different cultures and perspectives</li>
                  <li>Be part of a global movement for positive change</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg?height=450&width=600"
                  alt="Volunteers working together"
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
              <h2 className="text-3xl font-bold tracking-tighter">Volunteer Opportunities</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We offer a variety of ways to get involved based on your interests, skills, and availability.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <opportunity.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{opportunity.description}</p>
                  <div className="text-sm font-medium">Time Commitment: {opportunity.commitment}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Volunteer Application</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Ready to make a difference? Fill out our volunteer application form and we'll get in touch with you to
                discuss opportunities that match your interests and availability.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Expect</h3>
                <ol className="space-y-2 text-muted-foreground md:text-lg/relaxed list-decimal pl-6">
                  <li>Submit your application through the form</li>
                  <li>Our volunteer coordinator will review your application</li>
                  <li>We'll schedule an initial conversation to learn more about you</li>
                  <li>Together, we'll identify the best opportunity for your skills and interests</li>
                  <li>You'll receive an orientation and any necessary training</li>
                  <li>Begin your volunteer journey with Hope Foundation!</li>
                </ol>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Volunteer Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Hear from some of our volunteers about their experiences with Hope Foundation.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                quote:
                  "Volunteering with Hope Foundation in Kenya was a life-changing experience. I helped implement a clean water project and saw firsthand the impact it had on the community.",
                name: "James Wilson",
                role: "Field Volunteer, 2022",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "As a virtual volunteer, I've been able to use my marketing skills to support Hope Foundation's campaigns while balancing my full-time job. It's incredibly rewarding.",
                name: "Emma Rodriguez",
                role: "Virtual Volunteer, 2021-Present",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "I started as an event volunteer and was so inspired by the mission that I now lead our local chapter. The community we've built among volunteers is amazing.",
                name: "Amir Hassan",
                role: "Event Volunteer, 2020-Present",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">"</div>
                  <p className="text-muted-foreground mb-6">{story.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

