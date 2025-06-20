import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Clean Water Project Reaches 10,000 People in Rural Kenya",
      description:
        "Our latest clean water initiative has successfully provided access to safe drinking water for over 10,000 people in rural Kenya.",
      image: "/placeholder.svg?height=200&width=400",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      category: "Clean Water",
      slug: "clean-water-kenya",
    },
    {
      title: "New School Opens Doors to 500 Students in Nepal",
      description:
        "We're proud to announce the opening of a new school in Nepal, providing quality education to 500 children in the community.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 28, 2023",
      author: "Michael Chen",
      category: "Education",
      slug: "nepal-school-opening",
    },
    {
      title: "Healthcare Clinic Expands Services in Rural India",
      description:
        "Our healthcare clinic in rural India has expanded its services to include maternal care, vaccinations, and preventive health education.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 10, 2023",
      author: "Priya Patel",
      category: "Healthcare",
      slug: "healthcare-india-expansion",
    },
    {
      title: "Sustainable Farming Techniques Boost Crop Yields by 40%",
      description:
        "Farmers in our agricultural program have seen a 40% increase in crop yields after implementing sustainable farming techniques.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 22, 2023",
      author: "David Rodriguez",
      category: "Agriculture",
      slug: "sustainable-farming-yields",
    },
    {
      title: "Women Entrepreneurs Launch 50 New Businesses",
      description:
        "Our women's empowerment program has helped launch 50 new businesses, creating economic opportunities for women and their families.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 8, 2023",
      author: "Fatima Al-Zahrani",
      category: "Women's Empowerment",
      slug: "women-entrepreneurs",
    },
    {
      title: "Reforestation Project Reaches 50,000 Trees Milestone",
      description:
        "Our environmental conservation team has planted the 50,000th tree in our ongoing reforestation project to combat deforestation.",
      image: "/placeholder.svg?height=200&width=400",
      date: "February 15, 2023",
      author: "Carlos Mendez",
      category: "Environment",
      slug: "reforestation-milestone",
    },
  ]

  const categories = [
    "All",
    "Clean Water",
    "Education",
    "Healthcare",
    "Agriculture",
    "Women's Empowerment",
    "Environment",
  ]

  return (
    <main className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog & News</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Stay updated with our latest projects, impact stories, and organizational news.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="flex flex-col overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={`/blog/${post.slug}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Read More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            <div className="md:w-1/4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href={
                          category === "All"
                            ? "/blog"
                            : `/blog/category/${category.toLowerCase().replace("'", "").replace(" ", "-")}`
                        }
                        className={`px-3 py-1 text-sm rounded-full ${
                          category === "All" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscribe</CardTitle>
                  <CardDescription>Get the latest updates delivered to your inbox.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                    <Button className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex gap-2">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="object-cover w-full h-full rounded"
                          />
                        </div>
                        <div>
                          <Link href={`/blog/${post.slug}`} className="font-medium hover:text-primary line-clamp-2">
                            {post.title}
                          </Link>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

