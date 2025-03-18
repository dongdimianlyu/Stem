import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[rgb(37,108,250)]">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full relative">
          {/* We'll use placeholder for background pattern - typically this would be an image */}
          <div className="absolute inset-0 bg-[url('/images/stem-pattern.jpg')] bg-cover bg-center" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover Your STEM 
              <span className="text-[rgb(255,250,97)]"> Potential</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Helping Malaysian students from all backgrounds explore their passion for Science, Technology, Engineering, and Mathematics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/quiz" 
                className="px-8 py-3 bg-[rgb(255,250,97)] text-[rgb(37,108,250)] font-bold rounded-full text-center hover:bg-yellow-300 transition-colors"
              >
                Take the Free Quiz
              </Link>
              <Link
                href="#about"
                className="px-8 py-3 border-2 border-white text-white rounded-full text-center hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              {/* This would be a real image in production */}
              <div className="w-full h-full bg-gradient-to-br from-[rgb(37,108,250)] to-blue-700 flex items-center justify-center">
                <div className="text-[rgb(255,250,97)] text-9xl font-bold">
                  STEM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 