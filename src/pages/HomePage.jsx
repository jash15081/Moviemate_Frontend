import MovieBlock from "../components/MovieBlock.jsx"
import React from "react";
import Navbar from "../components/Navbar.jsx";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <Navbar />
//       <MovieBlock />
//     </main>
//   )
// }

const mockMovies = [
  {
    id: 1,
    title: "The White Lotus: Season 3",
    type: "season",
    imageUrl: "https://example.com/white-lotus.jpg",
    rating: 4.5,
    reviewCount: 36,
    sentiment: "Generally Favorable",
  },
  {
    id: 2,
    title: "Captain America: Brave New World",
    type: "movie",
    imageUrl: "https://example.com/captain-america.jpg",
    rating: 2.1,
    reviewCount: 53,
    sentiment: "Mixed or Average",
  },
  {
    id: 3,
    title: "Avowed",
    type: "game",
    imageUrl: "https://example.com/avowed.jpg",
    rating: 4.0,
    reviewCount: 69,
    sentiment: "Generally Favorable",
  },
  {
    id: 4,
    title: "Yellowjackets: Season 3",
    type: "season",
    imageUrl: "https://example.com/yellowjackets.jpg",
    rating: 3.3,
    reviewCount: 21,
    sentiment: "Generally Favorable",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <MovieBlock title="New and Notable" movies={mockMovies} />
    </main>
  )
}


