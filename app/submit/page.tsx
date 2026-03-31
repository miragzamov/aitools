import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="h-16 w-16" />
        </div>
        <h1 className="mb-2 text-3xl font-bold">Submit a Tool</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Tool submission is currently unavailable. Please try again later.
        </p>
        <Link href="/tools">
          <Button className="w-full">Explore Tools</Button>
        </Link>
      </div>
    </div>
  )
}
