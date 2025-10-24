
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <div className="font-['Inter',_sans-serif] bg-black text-[#FF0000]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover z-[-1]"
          poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&h=1080&fit=crop&q=80"
        >
          <source src="https://videos.pexels.com/video-files/7573670/7573670-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="font-['Archivo_Black',_sans-serif] text-[#FF0000] text-6xl md:text-8xl mb-6">
            <nav className="space-y-3">
              <a 
                href="https://instagram.com/piffmarti"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-red-400 hover:text-white transition"
              >
                INSTAGRAM
              </a>
              <a 
                href="mailto:mgmt@piffmarti.com" 
                className="block text-red-400 hover:text-white transition"
              >
                EMAIL
              </a>                    
            </nav>
            <div className="mt-12">
              <Link to={createPageUrl("Home")} className="text-red-400 hover:text-white transition inline-block">
                <ArrowLeft size={48} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
