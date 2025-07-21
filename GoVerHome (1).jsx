// GoVer – Luxurious Finance Website by Forever Prince

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GoVerHome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 p-10 text-center">
        <h1 className="text-5xl font-bold text-gold-500 mb-4">GoVer</h1>
        <p className="text-xl max-w-xl mx-auto text-gray-300">
          Luxurious Finance Platform to Guide Your Wealth Journey – Forex, Mindset, and Success.
        </p>
        <Button className="mt-6 bg-gold-500 text-black font-bold px-6 py-3 rounded-2xl shadow-lg">
          Join Now
        </Button>
      </section>

      {/* About Section */}
      <section className="p-10 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-gold-400 mb-4">About GoVer</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          GoVer is a vision by Forever Prince to help young people learn finance, dominate Forex, and live a luxurious lifestyle with purpose and intelligence.
        </p>
      </section>

      {/* Forex Academy */}
      <section className="p-10 bg-black text-center">
        <h2 className="text-3xl font-semibold text-gold-400 mb-4">Forex Academy</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-6">
          Learn Forex step-by-step from beginner to pro. Access charts, strategies, and downloadable PDF guides.
        </p>
        <Button className="bg-gold-500 text-black px-5 py-2 rounded-xl">Start Learning</Button>
      </section>

      {/* Social Links */}
      <section className="p-10 bg-gray-900 text-center">
        <h2 className="text-2xl font-bold text-gold-400 mb-4">Connect With Us</h2>
        <div className="flex justify-center gap-6 flex-wrap text-lg">
          <a href="#" className="text-blue-400 hover:text-white">WhatsApp</a>
          <a href="#" className="text-pink-400 hover:text-white">Instagram</a>
          <a href="#" className="text-blue-500 hover:text-white">Facebook</a>
          <a href="#" className="text-cyan-400 hover:text-white">Twitter</a>
          <a href="#" className="text-red-400 hover:text-white">TikTok</a>
        </div>
      </section>

      {/* Login Section */}
      <section className="p-10 bg-black text-center">
        <h2 className="text-2xl font-bold text-gold-400 mb-4">Member Login</h2>
        <div className="max-w-md mx-auto space-y-4">
          <Input placeholder="Email" className="bg-gray-800 text-white" />
          <Input type="password" placeholder="Password" className="bg-gray-800 text-white" />
          <Button className="bg-gold-500 text-black w-full">Login</Button>
        </div>
        <p className="text-sm text-gray-400 mt-4">Don't have an account? <a href="#" className="text-gold-300 underline">Sign Up</a></p>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-center text-gray-500 text-sm">
        &copy; 2025 GoVer. Built by Forever Prince.
      </footer>
    </div>
  );
}
