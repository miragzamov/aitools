import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            AiTools
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover powerful AI-powered tools to enhance your productivity and
            creativity. From content generation to data analysis, AiTools has
            everything you need.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/tools">
              <Button size="lg" className="px-8">
                Explore Tools
              </Button>
            </Link>
            <Link href="/request">
              <Button variant="outline" size="lg" className="px-8">
                Request a Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
