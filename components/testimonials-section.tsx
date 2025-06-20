import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The Hope Foundation's clean water project transformed our village. We now have access to clean drinking water for the first time in generations.",
      name: "Maria Rodriguez",
      role: "Community Leader",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "Volunteering with Hope Foundation was a life-changing experience. I saw firsthand the impact their education programs have on children's lives.",
      name: "James Wilson",
      role: "Volunteer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "As a donor, I appreciate the transparency and effectiveness of Hope Foundation. Every dollar truly makes a difference in their programs.",
      name: "Sarah Johnson",
      role: "Monthly Donor",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Voices of Impact</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the communities we serve and the supporters who make our work possible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="pt-6">
                <div className="mb-4 text-4xl">"</div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t bg-muted/50 px-6 py-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

