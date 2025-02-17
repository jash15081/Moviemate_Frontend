
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import React from "react";


import { Card, CardContent, CardHeader } from "../components/ui/card"
import { StarRating } from "../components/ui/star-rating"

// const movies = [
//     {
//       title: "The White Lotus: Season 3",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "season",
//       rating: 4.5,
//       reviews: 36,
//     },
//     {
//       title: "Captain America: Brave New World",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "movie",
//       rating: 2.1,
//       reviews: 53,
//     },
//     {
//       title: "Avowed",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "game",
//       rating: 4.8,
//       reviews: 67,
//     },
//     {
//       title: "Yellowjackets: Season 3",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "season",
//       rating: 3.3,
//       reviews: 21,
//     },
//     {
//       title: "Dune: Part Two",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "movie",
//       rating: 4.7,
//       reviews: 82,
//     },
//     {
//       title: "Final Fantasy VII Rebirth",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "game",
//       rating: 4.9,
//       reviews: 95,
//     },
//     {
//       title: "True Detective: Season 4",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "season",
//       rating: 4.2,
//       reviews: 45,
//     },
//     {
//       title: "Deadpool 3",
//       image: "/placeholder.svg?height=200&width=300",
//       type: "movie",
//       rating: 4.0,
//       reviews: 28,
//     },
//   ]
  
//   function StarRating({ rating }) {
//     const fullStars = Math.floor(rating)
//     const hasHalfStar = rating % 1 >= 0.5
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  
//     return (
//       <div className="flex items-center">
//         {[...Array(fullStars)].map((_, i) => (
//           <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//         ))}
//         {hasHalfStar && (
//           <div className="relative w-4 h-4">
//             <Star className="absolute w-4 h-4 text-yellow-400" />
//             <div className="absolute w-2 h-4 overflow-hidden">
//               <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//             </div>
//           </div>
//         )}
//         {[...Array(emptyStars)].map((_, i) => (
//           <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
//         ))}
//       </div>
//     )
//   }
  
//   function getBorderColor(rating) {
//     if (rating >= 4) return "border-green-500"
//     if (rating >= 2) return "border-yellow-500"
//     return "border-red-500"
//   }
  
//   export default function MovieBlock() {
//     const [scrollPosition, setScrollPosition] = useState(0)
//     const [visibleMovies, setVisibleMovies] = useState(movies)
  
//     const scroll = (direction) => {
//       const container = document.getElementById("media-container")
//       const scrollAmount = direction === "left" ? -400 : 400
//       container.scrollBy({ left: scrollAmount, behavior: "smooth" })
//       setScrollPosition(container.scrollLeft + scrollAmount)
//     }
  
//     const shuffleMovies = (direction) => {
//       const newMovies = [...visibleMovies]
//       if (direction === "right") {
//         const first = newMovies.shift()
//         newMovies.push(first)
//       } else {
//         const last = newMovies.pop()
//         newMovies.unshift(last)
//       }
//       setVisibleMovies(newMovies)
//     }
  
//     const handleClick = (direction) => {
//       scroll(direction)
//       shuffleMovies(direction)
//     }
  
//     return (
//       <div className="max-w-[1600px] mx-auto px-6 py-8 mt-16">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold">New and Notable</h2>
//           <div className="flex space-x-2">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => handleClick("left")}
//               className="border-gray-300 hover:bg-gray-100"
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => handleClick("right")}
//               className="border-gray-300 hover:bg-gray-100"
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>
//         </div>
  
//         <div id="media-container" className="flex space-x-6 overflow-x-hidden scroll-smooth">
//           {visibleMovies.map((item, index) => (
//             <div
//               key={index}
//               className={`flex-none w-[300px] ${getBorderColor(item.rating)} border-2 rounded-lg overflow-hidden bg-white shadow-lg transform transition-transform duration-300 hover:scale-105`}
//             >
//               <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-[200px] object-cover" />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
//                 <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm mb-3">{item.type}</span>
//                 <div className="flex items-center justify-between">
//                   <StarRating rating={item.rating} />
//                   <span className="text-sm text-gray-600">{item.reviews} reviews</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
  
  

function getBorderColor(rating) {
    if (rating >= 4) return "border-green-500"
    if (rating >= 2) return "border-yellow-500"
    return "border-red-500"
  }
  
  function getSentimentColor(rating) {
    if (rating >= 4) return "text-green-500"
    if (rating >= 2) return "text-yellow-500"
    return "text-red-500"
  }
  
  export default function MovieBlock({ title, movies }) {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % movies.length)
    }
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length)
    }
  
    const visibleMovies = movies.slice(currentIndex, currentIndex + 4)
  
    return (
      <div className="w-full py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentIndex === 0}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex >= movies.length - 4}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleMovies.map((movie) => (
              <Card
                key={movie.id}
                className={`overflow-hidden transition-transform hover:scale-105 ${getBorderColor(movie.rating)}`}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={movie.imageUrl || "/placeholder.svg"}
                    alt={movie.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <div className="inline-block px-2 py-1 text-xs bg-gray-100 rounded">{movie.type}</div>
                  <h3 className="font-semibold line-clamp-2">{movie.title}</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-xs uppercase text-muted-foreground">METASCORE</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-semibold ${getSentimentColor(movie.rating)}`}>{movie.sentiment}</div>
                        <div className="text-sm text-muted-foreground">Based on {movie.reviewCount} Critic Reviews</div>
                      </div>
                      <StarRating rating={movie.rating} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }
  