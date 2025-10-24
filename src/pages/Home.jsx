
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Home() {
  return (
    <div className="font-['Inter',_sans-serif] bg-black text-[#FF0000]">
      {/* 
        This page is built to match the exact HTML structure you provided.
        The global styles are handled in Layout.js.
      */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover z-[-1]"
          poster="https://images.unsplash.com/photo-1519923834699-ef0b7d5a1538?w=1920&h=1080&fit=crop&q=80"
        >
          {/* Using a more reliable video source that fits the urban theme */}
          <source src="https://videos.pexels.com/video-files/2882199/2882199-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-['Archivo_Black',_sans-serif] text-[#FF0000] text-6xl md:text-8xl mb-6">
            <nav className="space-y-3">
              <Link to={createPageUrl("Press")} className="block text-red-400 hover:text-white transition">
                WHO AM I?
              </Link>
              <a 
                href="https://hypeddit.com/piffmartimerlakura/bounce" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-red-400 hover:text-white transition"
              >
                MUSIC
              </a>                    
              <Link to={createPageUrl("Contact")} className="block text-red-400 hover:text-white transition">
                CONTACT
              </Link>
            </nav>
          </h1>
        </div>
      </section>
    </div>
  );
}
