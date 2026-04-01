import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Toolbox } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <Toolbox className="h-12 w-12 sm:h-16 sm:w-16" />
        </div>
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">Submit a Tool</h1>
        <p className="mb-6 text-base text-muted-foreground sm:text-lg">
          We are currently accepting tool submissions through our GitHub repository. Please submit your tool by creating a pull request with the necessary details and documentation. We look forward to reviewing your submission and potentially adding it to our collection of tools!
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link href="https://github.com/miragzamov/aitools" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="w-full">Submit on GitHub</Button>
          </Link>
          <Link href="/tools" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">View Tools</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
