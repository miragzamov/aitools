import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <section className="w-full container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            AiTools
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Discover powerful AI-powered tools to enhance your productivity and
            creativity. From content generation to data analysis, AiTools has
            everything you need.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center items-stretch sm:items-center">
            <Link href="/tools" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                Explore Tools
              </Button>
            </Link>
            <Link href="/submit" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                Submit a Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
