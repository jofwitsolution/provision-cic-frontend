import type { StaticImageData } from "next/image"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// next/image serves resized files whose rounded dimensions can shift the
// aspect ratio slightly; pin the original ratio where height is `auto`.
export function aspectStyle(image: StaticImageData) {
  return { aspectRatio: `${image.width} / ${image.height}` }
}
