import { ContactForm } from "@/components/contact-form"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Have questions or want to get involved? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Whether you have questions about our programs, want to volunteer, or are interested in partnering with
                  us, we're here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <address className="not-italic text-muted-foreground">
                      123 Hope Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@hopefoundation.org" className="text-muted-foreground hover:text-primary">
                      info@hopefoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 5:00 PM EST
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Global Offices</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We work around the world to support communities in need.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                location: "New York, USA",
                address: "123 Hope Street, New York, NY 10001",
                phone: "+1 (234) 567-890",
                email: "usa@hopefoundation.org",
              },
              {
                location: "Nairobi, Kenya",
                address: "456 Uhuru Avenue, Nairobi",
                phone: "+254 123 456 789",
                email: "kenya@hopefoundation.org",
              },
              {
                location: "New Delhi, India",
                address: "789 Gandhi Road, New Delhi, 110001",
                phone: "+91 98765 43210",
                email: "india@hopefoundation.org",
              },
            ].map((office, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">{office.location}</h3>
                <address className="not-italic text-muted-foreground">
                  {office.address}
                  <br />
                  <a href={`tel:${office.phone}`} className="hover:text-primary">
                    {office.phone}
                  </a>
                  <br />
                  <a href={`mailto:${office.email}`} className="hover:text-primary">
                    {office.email}
                  </a>
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

