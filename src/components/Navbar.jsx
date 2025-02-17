import { Link } from "react-router-dom"
import { Button } from "../components/ui/button.jsx"
import React, {useState} from "react";
import { Input } from "../components/ui/input.jsx";


import { Search } from "lucide-react"
// import Link from "next/link"
import AuthModal from "./AuthModel.jsx"


export default function Navbar() {
    return (
      <nav className="w-full bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <img src="/metacritic-logo.svg" alt="Metacritic" className="h-8 w-auto" />
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/games" className="hover:text-primary">
                  Games
                </Link>
                <Link href="/movies" className="hover:text-primary">
                  Movies
                </Link>
                <Link href="/tv" className="hover:text-primary">
                  TV Shows
                </Link>
                <Link href="/music" className="hover:text-primary">
                  Music
                </Link>
                <Link href="/news" className="hover:text-primary">
                  News
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="w-[300px] pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button variant="secondary" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }