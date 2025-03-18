import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[rgb(37,108,250)] mb-4">Success Stories</h2>
          <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Hear from Malaysian students who discovered their passion for STEM through our programs 
            and are now pursuing successful careers in their chosen fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-[rgb(37,108,250)] to-blue-600">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                    {/* This would be a real image in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[rgb(37,108,250)] text-white text-xl font-bold">
                      A
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Aisha Binti Rahman</h4>
                    <p className="text-black">Data Scientist at PETRONAS</p>
                  </div>
                </div>
                <p className="text-black mb-4">
                  "As a student from a rural area in Sabah, I never thought a career in data science was possible for me. 
                  MalaySTEM's quiz revealed my aptitude for mathematics and programming, and their AI counselor helped me 
                  find scholarships to pursue my education. Now I'm using data analytics to help optimize operations at Malaysia's 
                  largest energy company."
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(255,250,97)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-[rgb(37,108,250)] to-blue-600">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                    {/* This would be a real image in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[rgb(37,108,250)] text-white text-xl font-bold">
                      M
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Muhammad Farhan bin Abdullah</h4>
                    <p className="text-black">Software Engineer at Grab</p>
                  </div>
                </div>
                <p className="text-black mb-4">
                  "Growing up in a low-income family in Penang, I was always interested in computers but didn't know how 
                  to turn that into a career. The STEM quiz showed my strong aptitude for technology, and the AI counselor 
                  guided me toward free coding resources and affordable education options. Today, I'm developing solutions 
                  that millions of Malaysians use daily."
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(255,250,97)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-[rgb(37,108,250)] to-blue-600">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden relative">
                    {/* This would be a real image in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[rgb(37,108,250)] text-white text-xl font-bold">
                      S
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Suraya Lim</h4>
                    <p className="text-black">Biomedical Researcher at IMR</p>
                  </div>
                </div>
                <p className="text-black mb-4">
                  "I always loved biology but didn't think I could pursue it professionally coming from a family of modest means. 
                  The STEM quiz confirmed my passion for life sciences, and MalaySTEM helped me connect with mentors at the Institute 
                  for Medical Research. Now I'm contributing to important healthcare research that will benefit all Malaysians."
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(255,250,97)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block px-10 py-5 bg-[rgb(37,108,250)] text-white rounded-lg shadow-md">
            <p className="text-xl font-bold mb-2">Ready to discover your STEM potential?</p>
            <p className="mb-4">Join thousands of Malaysian students who found their path with our free quiz.</p>
            <a 
              href="#quiz" 
              className="px-6 py-2 bg-[rgb(255,250,97)] text-[rgb(37,108,250)] font-bold rounded-full inline-block hover:bg-yellow-300 transition-colors"
            >
              Take the Quiz Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 