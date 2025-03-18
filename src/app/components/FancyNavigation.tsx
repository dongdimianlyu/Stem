"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function FancyNavigation() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDirection, setLoadingDirection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Just close mobile menu on path change, removed reference to prevPath
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle navigation transitions
  const handleNavigate = (path: string) => {
    if (path !== pathname) {
      setIsLoading(true);
      
      // Determine direction for animation
      if (path === '/') {
        setLoadingDirection('from-left');
      } else if (path === '/quiz') {
        setLoadingDirection('from-right');
      } else if (path === '/counselor') {
        setLoadingDirection('from-bottom');
      } else if (path === '/career-paths') {
        setLoadingDirection('from-top');
      } else if (path === '/resources') {
        setLoadingDirection('from-right');
      }
      
      // Reset loading state after navigation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Slightly longer than the CSS transition
    }
  };

  return (
    <>
      {/* Loading overlay */}
      {isLoading && (
        <div className={`fixed inset-0 z-50 bg-[rgb(37,108,250)] transition-all duration-700 ${
          loadingDirection === 'from-left' ? 'animate-slide-in-left' :
          loadingDirection === 'from-right' ? 'animate-slide-in-right' :
          loadingDirection === 'from-top' ? 'animate-slide-in-top' :
          'animate-slide-in-bottom'
        }`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-black text-5xl font-bold animate-float">
              <span className="inline-block animate-fade-in">S</span>
              <span className="inline-block animate-fade-in" style={{ animationDelay: "100ms" }}>T</span>
              <span className="inline-block animate-fade-in" style={{ animationDelay: "200ms" }}>E</span>
              <span className="inline-block animate-fade-in" style={{ animationDelay: "300ms" }}>M</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation bar */}
      <header className="fixed w-full bg-[rgb(37,108,250)] text-black py-4 z-40 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold hover:text-[rgb(255,250,97)] transition-colors"
              onClick={() => handleNavigate('/')}
            >
              MalaySTEM
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${pathname === '/' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
              onClick={() => handleNavigate('/')}
            >
              Home
            </Link>
            <Link 
              href="/quiz" 
              className={`transition-colors ${pathname === '/quiz' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
              onClick={() => handleNavigate('/quiz')}
            >
              STEM Quiz
            </Link>
            <Link 
              href="/career-paths" 
              className={`transition-colors ${pathname === '/career-paths' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
              onClick={() => handleNavigate('/career-paths')}
            >
              Career Paths
            </Link>
            <Link 
              href="/counselor" 
              className={`transition-colors ${pathname === '/counselor' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
              onClick={() => handleNavigate('/counselor')}
            >
              AI Counselor
            </Link>
            <Link 
              href="/resources" 
              className={`transition-colors ${pathname === '/resources' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
              onClick={() => handleNavigate('/resources')}
            >
              Resources
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-black focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[rgb(37,108,250)] border-t border-blue-400 py-4 animate-slide-in-top">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`transition-colors py-2 text-black ${pathname === '/' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
                onClick={() => handleNavigate('/')}
              >
                Home
              </Link>
              <Link 
                href="/quiz" 
                className={`transition-colors py-2 text-black ${pathname === '/quiz' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
                onClick={() => handleNavigate('/quiz')}
              >
                STEM Quiz
              </Link>
              <Link 
                href="/career-paths" 
                className={`transition-colors py-2 text-black ${pathname === '/career-paths' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
                onClick={() => handleNavigate('/career-paths')}
              >
                Career Paths
              </Link>
              <Link 
                href="/counselor" 
                className={`transition-colors py-2 text-black ${pathname === '/counselor' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
                onClick={() => handleNavigate('/counselor')}
              >
                AI Counselor
              </Link>
              <Link 
                href="/resources" 
                className={`transition-colors py-2 text-black ${pathname === '/resources' ? 'text-[rgb(255,250,97)]' : 'hover:text-[rgb(255,250,97)]'}`}
                onClick={() => handleNavigate('/resources')}
              >
                Resources
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
} 