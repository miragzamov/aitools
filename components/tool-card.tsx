import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getCategoryColor } from "@/lib/category-colors"
import type { Tool } from "@/lib/tools"
import { cn, getFavicon } from "@/lib/utils"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const colors = getCategoryColor(tool.category || "Other")

  return (
    <Card
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        colors.glow
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-80 transition-opacity group-hover:opacity-100",
          colors.bar
        )}
      />

      <CardHeader className="space-y-4 pt-6">
        <div className="flex items-start justify-between gap-3">
          <div className="relative">
            <div
              className={cn(
                "absolute -inset-1 rounded-2xl opacity-0 blur-md transition-opacity group-hover:opacity-60",
                colors.bar,
                "bg-linear-to-br"
              )}
            />
            <Image
              src={getFavicon(tool.url)}
              alt=""
              width={40}
              height={40}
              className="relative rounded-xl bg-muted ring-2 ring-border/50"
              unoptimized
            />
          </div>
          <Badge
            variant="outline"
            className={cn("border font-medium", colors.badge)}
          >
            {tool.price ?? "Unknown"}
          </Badge>
        </div>

        <CardTitle className="text-lg leading-tight transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-300">
          {tool.name}
        </CardTitle>

        <CardDescription className="line-clamp-3">
          {tool.description}
        </CardDescription>

        <Badge className={cn("self-start border", colors.badge)}>
          <span className={cn("mr-1.5 inline-block size-1.5 rounded-full", colors.dot)} />
          {tool.category}
        </Badge>
      </CardHeader>

      <CardFooter>
        <Button
          asChild
          className={cn(
            "w-full bg-linear-to-r text-white border-0 transition-all",
            colors.bar,
            "hover:opacity-90 hover:shadow-lg"
          )}
        >
          <Link
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            Open
            <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
