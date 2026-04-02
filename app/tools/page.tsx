"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import tools from "@/lib/tools"
import { getFavicon } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  // Extract categories
  const categories = useMemo(() => {
    const cats = tools.map((t) => t.category || "Other")
    return ["All", ...Array.from(new Set(cats))]
  }, [])

  // Filter + sort
  const filteredTools = useMemo(() => {
    return tools
      .filter((tool) => {
        const text = `${tool.name} ${tool.description}`.toLowerCase()
        const matchesSearch = text.includes(search.toLowerCase())

        const matchesCategory =
          activeCategory === "All" ||
          (tool.category || "Other") === activeCategory

        return matchesSearch && matchesCategory
      })
  }, [search, activeCategory])

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">Tools</h1>
        <p className="mt-2 text-muted-foreground max-w-xl">
          Search, filter, and quickly launch the tools you use every day.
        </p>

        {/* Search */}
        <div className="mt-6">
          <Input
            autoFocus
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSearch("")
            }}
            className="max-w-md"
          />
        </div>

        {/* Categories */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        className="
        mx-auto grid max-w-6xl gap-6
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4
      "
      >
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => {

            return (
              <Card
                key={tool.name}
                className="group flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={getFavicon(tool.url)}
                        alt={tool.name}
                        className="h-10 w-10 rounded-xl bg-white shadow-sm"
                      />
                    </div>
                    <Badge
                      variant="outline"
                    >
                      {tool.price || "Unknown"}

                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg leading-tight">
                        {tool.name}
                      </CardTitle>
                    </div>
                  </div>

                  <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                    {tool.description}
                  </CardDescription>

                  <Badge className="self-start">{tool.category}</Badge>
                </CardHeader>

                <CardFooter>
                  <Link
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                      Open
                      <ExternalLink
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-lg font-medium">No tools found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try a different keyword or clear search
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSearch("")}
            >
              Clear search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
