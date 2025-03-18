import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[rgb(37,108,250)] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">MalaySTEM</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-[rgb(255,250,97)] transition-colors">
            About
          </Link>
          <Link href="#quiz" className="hover:text-[rgb(255,250,97)] transition-colors">
            STEM Quiz
          </Link>
          <Link href="#career-paths" className="hover:text-[rgb(255,250,97)] transition-colors">
            Career Paths
          </Link>
          <Link href="#ai-counselor" className="hover:text-[rgb(255,250,97)] transition-colors">
            AI Counselor
          </Link>
          <Link href="#contact" className="hover:text-[rgb(255,250,97)] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 