import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFavicon(url: string) {
  try {
    const { hostname } = new URL(url)
    return `https://www.google.com/s2/favicons?sz=256&domain=${hostname}`
  } catch (error) {
    console.error("Invalid URL:", url, error)
    return "https://www.google.com/s2/favicons?sz=256&domain=default"
  }
}
