"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.jsx"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import React from "react";

export default function AuthModal({ isOpen = false, onClose }) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-full max-w-md relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
  
          <CardHeader className="flex items-center justify-center pb-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gd9aijB8raxeiloJ8XXa844JtDC9Wu.png"
              alt="Logo"
              className="h-8"
            />
          </CardHeader>
  
          <CardContent>
            <Tabs defaultValue="register" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="register">Register</TabsTrigger>
                <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              </TabsList>
  
              <TabsContent value="register">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" required />
                    <p className="text-xs text-muted-foreground">15 characters max, letters and numbers only</p>
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                    <p className="text-xs text-muted-foreground">
                      Must be at least 6 characters with 1 number and special character
                    </p>
                  </div>
  
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>
              </TabsContent>
  
              <TabsContent value="sign-in">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input id="signin-email" type="email" required />
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input id="signin-password" type="password" required />
                  </div>
  
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
  
                  <Button variant="link" className="w-full text-sm text-muted-foreground">
                    Forgot Password?
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    )
  }