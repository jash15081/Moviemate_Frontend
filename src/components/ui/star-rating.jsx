"use client"
import React from "react"
import { Star } from "lucide-react"

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
}

export function StarRating({ rating, maxRating = 5, size = "md" }) {
  const stars = Array.from({ length: maxRating }, (_, i) => {
    const filled = i < Math.floor(rating)
    const halfFilled = i === Math.floor(rating) && rating % 1 !== 0

    return (
      <Star
        key={i}
        className={`${sizeMap[size]} ${
          filled
            ? "fill-yellow-400 text-yellow-400"
            : halfFilled
              ? "fill-yellow-400/50 text-yellow-400"
              : "fill-muted text-muted-foreground"
        }`}
      />
    )
  })

  return <div className="flex gap-0.5">{stars}</div>
}

