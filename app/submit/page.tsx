import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Sparkles, Toolbox } from "lucide-react"

import { AuroraBackground } from "@/components/aurora-background"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Submit a Tool",
  description:
    "Submit your AI tool to the AiTools directory via GitHub pull request.",
}

const steps = [
  "Fork the repository on GitHub",
  "Add your tool to lib/tools.ts",
  "Open a pull request with details",
]

export default function Page() {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 py-16">
      <AuroraBackground />

      <Card className="glass-panel relative w-full max-w-lg overflow-hidden border-violet-500/20 shadow-xl shadow-violet-500/10">
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-600 text-white shadow-[0_0_24px_-4px] shadow-violet-500/50">
            <Toolbox className="size-7" />
          </div>
          <CardTitle className="text-2xl">
            Submit a{" "}
            <span className="gradient-text">Tool</span>
          </CardTitle>
          <CardDescription>
            Help grow the directory — open source and community-driven.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <ul className="space-y-2">
            {steps.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-sm"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
            <Sparkles className="size-3 text-fuchsia-500" />
            We review submissions regularly
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="w-full btn-glow bg-linear-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 border-0"
          >
            <Link
              href="https://github.com/miragzamov/aitools"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="size-4" />
              Submit on GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full gradient-border">
            <Link href="/tools">View Tools</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
