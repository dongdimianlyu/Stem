import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[rgb(37,108,250)] mb-4">About MalaySTEM</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Empowering low-income Malaysian students to discover their passion for Science, Technology, Engineering, and Mathematics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[rgb(37,108,250)]">Our Mission</h3>
            <p className="text-black mb-6">
              At MalaySTEM, we believe that every student deserves access to quality STEM education, regardless of their economic background. 
              Our mission is to break down barriers to STEM careers for low-income students in Malaysia by providing them with the resources, 
              guidance, and opportunities they need to succeed.
            </p>
            <p className="text-black">
              Through our free assessment tools, career guidance, and educational resources, we aim to inspire the next generation 
              of Malaysian scientists, technologists, engineers, and mathematicians who will drive innovation and progress in our country.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* This would be a real image in production */}
            <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-[rgb(37,108,250)] text-4xl font-bold p-8 text-center">
                Students exploring STEM concepts in a Malaysian classroom
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/quiz" className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-center mb-4">Discover Your Interests</h4>
            <p className="text-black text-center">
              Our specially designed quiz helps you identify which STEM fields align best with your natural aptitudes and interests.
            </p>
          </Link>

          <Link href="/career-paths" className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-center mb-4">Explore Career Paths</h4>
            <p className="text-black text-center">
              Learn about diverse STEM careers, including educational requirements, salary expectations, and job outlooks in Malaysia.
            </p>
          </Link>

          <Link href="/counselor" className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-center mb-4">Get Personalized Guidance</h4>
            <p className="text-black text-center">
              Our AI counselor provides customized advice and educational resources based on your interests and career aspirations.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
} 