import React from "react";
import { Play, ExternalLink, Headphones } from "lucide-react";

export default function Music() {
  const tracks = [
    {
      title: "BOUNCE",
      description: "Latest Single",
      url: "https://hypeddit.com/piffmartimerlakura/bounce",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
      gradient: "from-red-600 to-yellow-500",
    },
    {
      title: "URBAN NIGHTS",
      description: "Coming Soon",
      url: "#",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=800&fit=crop",
      gradient: "from-purple-600 to-red-600",
    },
    {
      title: "STREET SYMPHONY",
      description: "Album",
      url: "#",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop",
      gradient: "from-blue-600 to-red-600",
    },
    {
      title: "MIDNIGHT SESSIONS",
      description: "EP",
      url: "#",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=800&fit=crop",
      gradient: "from-green-600 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&h=1080&fit=crop" 
            alt="Music"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <Headphones size={80} className="mx-auto mb-6 text-red-500 animate-pulse" />
          <h1 className="hero-text text-5xl md:text-7xl mb-4 gradient-text">
            MUSIC
          </h1>
          <p className="text-2xl text-red-400 font-light">LISTEN TO THE SOUND OF THE STREETS</p>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300 group"
              >
                <div className={`aspect-square bg-gradient-to-br ${track.gradient} relative overflow-hidden`}>
                  <img 
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{track.title}</h3>
                  <p className="text-red-400 mb-4 text-lg">{track.description}</p>
                  
                  <a
                    href={track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-red-400 transition-colors font-semibold"
                  >
                    {track.url === "#" ? (
                      <>
                        <Play size={18} />
                        Coming Soon
                      </>
                    ) : (
                      <>
                        <ExternalLink size={18} />
                        Listen Now
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hero-text text-4xl md:text-5xl mb-8 text-white">
            AVAILABLE ON <span className="gradient-text">ALL PLATFORMS</span>
          </h2>
          <p className="text-xl text-red-400 mb-12">
            Stream PIFFMARTI wherever you listen to music
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Spotify", "Apple Music", "SoundCloud", "YouTube"].map((platform, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-red-600 transition-colors duration-300 cursor-pointer group"
              >
                <p className="text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  {platform}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://hypeddit.com/piffmartimerlakura/bounce"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card inline-block px-12 py-5 text-white font-bold tracking-wide text-lg hover:bg-red-600 transition-all duration-300"
            >
              LISTEN TO BOUNCE NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}