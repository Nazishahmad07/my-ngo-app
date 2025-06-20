export function ImpactMetrics() {
  const metrics = [
    { value: "50+", label: "Projects Completed" },
    { value: "100K+", label: "Lives Impacted" },
    { value: "25+", label: "Countries Reached" },
    { value: "$10M+", label: "Funds Raised" },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
          <p className="max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
            For over 15 years, we've been making a difference in communities around the world.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold md:text-5xl lg:text-6xl">{metric.value}</div>
              <div className="text-sm font-medium md:text-base">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

