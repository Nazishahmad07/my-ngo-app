export function PartnerLogos() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Our Partners</h2>
            <p className="max-w-[900px] text-muted-foreground">
              We collaborate with organizations around the world to maximize our impact.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 py-12 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=60&width=120"
                alt={`Partner logo ${index + 1}`}
                className="h-12 w-auto object-contain grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

