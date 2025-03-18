"use client";

import Link from 'next/link';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  isActive: boolean;
}

const ResourceCard = ({ title, description, icon, href, isActive }: ResourceCardProps) => {
  return (
    <>
      {isActive ? (
        <Link href={href || "#"} className="block">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 h-full border-l-4 border-[rgb(37,108,250)]">
            <div className="w-16 h-16 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mb-6 mx-auto text-white">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-[rgb(37,108,250)]">{title}</h3>
            <p className="text-black text-center">{description}</p>
            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-[rgb(37,108,250)] text-white rounded-full text-sm">
                Explore Resources
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg h-full border-l-4 border-gray-300 opacity-75">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-6 mx-auto text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-center mb-4 text-[rgb(37,108,250)]">{title}</h3>
          <p className="text-black text-center">{description}</p>
          <div className="mt-4 text-center">
            <span className="inline-block px-4 py-2 bg-gray-300 text-gray-600 rounded-full text-sm">
              Coming Soon
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[rgb(37,108,250)] mb-4">STEM Learning Resources</h1>
            <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Explore our comprehensive collection of STEM learning resources, organized by field and subject. 
              These materials are designed to help you deepen your understanding and build practical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ResourceCard 
              title="Physics"
              description="Explore the fundamental laws that govern the universe, from mechanics to quantum theory."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              }
              isActive={false}
            />
            
            <ResourceCard 
              title="Chemistry"
              description="Discover the science of matter, its properties, and how substances combine or separate to form other substances."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
              href="/resources/chemistry"
              isActive={true}
            />
            
            <ResourceCard 
              title="Biology"
              description="Learn about living organisms, their structure, growth, evolution, distribution, and taxonomy."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              }
              isActive={false}
            />
            
            <ResourceCard 
              title="Computer Science"
              description="Explore the theory and practice of computing, including algorithms, data structures, and software development."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              isActive={false}
            />
            
            <ResourceCard 
              title="Mathematics"
              description="Master the science of numbers, quantity, structure, space, and change through problem-solving and critical thinking."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              isActive={false}
            />
            
            <ResourceCard 
              title="Engineering"
              description="Learn about the application of scientific and mathematical principles to design, build, and improve structures, machines, and systems."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              isActive={false}
            />
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-4">Featured Learning Path</h2>
            <p className="text-black mb-6">
              Our curated learning paths guide you through a systematic progression of topics, helping you build a solid foundation in your chosen field. 
              Each path includes video lessons, interactive exercises, and practical projects to reinforce your learning.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-[rgb(37,108,250)] mb-2">Introduction to STEM Thinking</h3>
                <p className="text-black mb-4">A comprehensive course designed to develop critical thinking, problem-solving, and analytical skills fundamental to all STEM disciplines.</p>
                <ul className="list-disc list-inside mb-4 text-black">
                  <li>15 video lessons</li>
                  <li>10 interactive exercises</li>
                  <li>5 hands-on projects</li>
                  <li>Certificate upon completion</li>
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="px-6 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full hover:bg-blue-600 transition-colors">
                  Start Learning Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 