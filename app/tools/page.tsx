"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import tools from "@/lib/tools"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Page() {
  const [search, setSearch] = useState("")

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight">Tools</h1>
        <p className="mt-2 text-muted-foreground">
          Quickly access your tools in one place
        </p>
        <div className="mt-6">
          <Input
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <Card
              key={tool.name}
              className="flex flex-col justify-between rounded-2xl transition-all duration-200 hover:shadow-lg"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-full w-full bg-white object-contain p-1"
              />
              <CardHeader>
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <CardDescription className="line-clamp-6">
                  {tool.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <Link
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="flex w-full items-center gap-2">
                    Open
                    <ExternalLink size={16} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground">
            No tools found
          </div>
        )}
      </div>
    </div>
  )
}
