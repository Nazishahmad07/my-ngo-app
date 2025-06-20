import { DonationForm } from "@/components/donation-form"

export default function DonatePage() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Support Our Mission</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Your donation helps us create sustainable solutions for communities in need around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Your Impact</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                When you donate to Hope Foundation, you're investing in sustainable solutions that empower communities
                to build better futures. Here's how your contribution makes a difference:
              </p>
              <ul className="space-y-2 text-muted-foreground md:text-lg/relaxed list-disc pl-6">
                <li>$25 can provide clean water to a family for a month</li>
                <li>$50 can supply educational materials for a classroom</li>
                <li>$100 can fund medical supplies for a rural clinic</li>
                <li>$250 can train a community health worker</li>
                <li>$500 can help build a water well serving an entire village</li>
                <li>$1,000 can fund a microloan program for women entrepreneurs</li>
              </ul>
              <p className="text-muted-foreground md:text-lg/relaxed">
                We're committed to transparency and efficiency. 85% of every donation goes directly to our programs,
                with only 15% used for administrative costs and fundraising.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Other Ways to Give</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Beyond one-time donations, there are many ways to support our work.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                title: "Monthly Giving",
                description:
                  "Join our community of sustaining donors who provide reliable, ongoing support for our programs.",
              },
              {
                title: "Corporate Partnerships",
                description:
                  "Engage your company in meaningful social responsibility through sponsorships and employee giving.",
              },
              {
                title: "Legacy Giving",
                description: "Create a lasting impact by including Hope Foundation in your estate planning.",
              },
              {
                title: "Donor-Advised Funds",
                description: "Recommend grants to Hope Foundation through your donor-advised fund.",
              },
              {
                title: "Stock Donations",
                description: "Donate appreciated securities for potential tax benefits while supporting our mission.",
              },
              {
                title: "Fundraise for Us",
                description: "Create your own fundraising campaign for birthdays, marathons, or special events.",
              },
            ].map((way, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold">{way.title}</h3>
                <p className="text-muted-foreground">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

