import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Browse and search a curated directory of AI tools, assistants, and builders.",
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
