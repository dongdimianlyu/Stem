import Image from 'next/image';
import Link from 'next/link';

export default function AICounselor() {
  return (
    <section id="ai-counselor" className="py-20 bg-[rgb(37,108,250)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Your Personal STEM Career Guide</h2>
          <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our AI counselor provides personalized guidance on STEM careers, educational pathways, 
            and opportunities tailored to Malaysian students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">How Our AI Counselor Helps</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-[rgb(255,250,97)] flex items-center justify-center text-[rgb(37,108,250)] font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Career Information</h4>
                    <p className="text-black">
                      Get detailed information about various STEM careers including required qualifications, 
                      average salaries in Malaysia, and job growth projections.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-[rgb(255,250,97)] flex items-center justify-center text-[rgb(37,108,250)] font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Educational Pathways</h4>
                    <p className="text-black">
                      Learn about educational requirements, recommended courses, universities in Malaysia, 
                      and scholarship opportunities for your chosen field.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-[rgb(255,250,97)] flex items-center justify-center text-[rgb(37,108,250)] font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Malaysian Industry Insights</h4>
                    <p className="text-black">
                      Discover which STEM industries are growing in Malaysia, major employers, 
                      and regions with the highest demand for specific skills.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-[rgb(255,250,97)] flex items-center justify-center text-[rgb(37,108,250)] font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Personalized Resources</h4>
                    <p className="text-black">
                      Get recommendations for books, online courses, local workshops, and Malaysian 
                      organizations that can help you develop skills in your chosen field.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  href="/ai-counselor"
                  className="px-8 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full inline-block hover:bg-blue-600 transition-colors"
                >
                  Chat with AI Counselor
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-black">
            <h3 className="text-2xl font-bold mb-6">Sample STEM Career Information</h3>
            
            <div className="space-y-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="text-xl text-[rgb(255,250,97)] font-semibold mb-3">Data Scientist</h4>
                <p className="mb-4 text-black">
                  Data scientists analyze large datasets to solve complex problems and provide valuable insights for organizations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[rgb(255,250,97)] text-sm">Average Salary (Malaysia)</p>
                    <p className="font-semibold text-black">RM 84,000 - RM 120,000</p>
                  </div>
                  <div>
                    <p className="text-[rgb(255,250,97)] text-sm">Job Growth</p>
                    <p className="font-semibold text-black">29% (Much faster than average)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h4 className="text-xl text-[rgb(255,250,97)] font-semibold mb-3">Biotechnology Researcher</h4>
                <p className="mb-4 text-black">
                  Biotechnology researchers develop new products and processes using biological systems, organisms, or derivatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[rgb(255,250,97)] text-sm">Average Salary (Malaysia)</p>
                    <p className="font-semibold text-black">RM 72,000 - RM 96,000</p>
                  </div>
                  <div>
                    <p className="text-[rgb(255,250,97)] text-sm">Job Growth</p>
                    <p className="font-semibold text-black">10% (Average)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 