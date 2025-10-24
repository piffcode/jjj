

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Music, User, Mail, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
  { title: "HOME", url: createPageUrl("Home"), icon: User },
  { title: "WHO AM I?", url: createPageUrl("Press"), icon: User },
  { title: "MUSIC", url: "https://hypeddit.com/piffmartimerlakura/bounce", icon: Music, external: true },
  { title: "CONTACT", url: createPageUrl("Contact"), icon: Mail }];


  // Logic to show/hide main nav based on page
  const isSpecialLayoutPage = currentPageName === "Home" || currentPageName === "Contact";

  const navLinkClasses = (item) => `nav-link font-semibold tracking-wide ${
  location.pathname === item.url && !item.external ? 'active text-white' : 'text-red-400 hover:text-white'}`;


  const mobileNavLinkClasses = (item) => `flex items-center space-x-3 font-semibold tracking-wide ${
  location.pathname === item.url && !item.external ? 'text-white' : 'text-red-400 hover:text-white'} transition-colors`;


  const renderNavItem = (item) => {
    if (item.external) {
      return (
        <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className={navLinkClasses(item)}>
          {item.title}
        </a>);

    }
    return (
      <Link key={item.title} to={item.url} className={navLinkClasses(item)}>
        {item.title}
      </Link>);

  };

  const renderMobileNavItem = (item) => {
    if (item.external) {
      return (
        <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClasses(item)}>
           <item.icon size={20} />
           <span>{item.title}</span>
         </a>);

    }
    return (
      <Link key={item.title} to={item.url} onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClasses(item)}>
        <item.icon size={20} />
        <span>{item.title}</span>
      </Link>);

  };

  return (
    <div className="min-h-screen bg-black text-red-500">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #000;
          color: #FF0000;
        }

        .hero-text {
          font-family: 'Archivo Black', sans-serif;
          color: #FF0000;
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #FF4D4D 0%, #F9CB28 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 77, 77, 0.2);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(255, 77, 77, 0.3);
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF0000;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Main Navigation (hidden on special pages) */}
      {!isSpecialLayoutPage &&
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to={createPageUrl("Home")} className="hero-text text-2xl md:text-3xl text-red-500 hover:text-red-400 transition-colors">
                PIFFMARTI
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map(renderNavItem)}
              </div>

              {/* Mobile Menu Button */}
              <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-red-500 hover:text-white transition-colors">

                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen &&
          <div className="md:hidden mt-6 space-y-4 pb-4">
                {navigationItems.map(renderMobileNavItem)}
              </div>
          }
          </div>
        </nav>
      }
      
      {/* Main Content */}
      <main className={isSpecialLayoutPage ? '' : 'pt-20'}>
        {children}
      </main>

      {/* Footer (hidden on special pages) */}
      {!isSpecialLayoutPage &&
      <footer className="glass-card mt-20 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-red-400 font-semibold">© 2025 STAY DANGEROUS PRODUCTIONS LLC</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://hypeddit.com/piffmartimerlakura/bounce" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-white transition-colors">

            </a>
            </div>
          </div>
        </footer>
      }
    </div>);

}
