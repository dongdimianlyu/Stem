"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";

// Animated components
const FloatingMolecule = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute w-16 h-16 bg-[rgb(37,108,250)] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute w-8 h-8 bg-[rgb(255,250,97)] rounded-full left-0 top-1/4 animate-bounce"></div>
      <div className="absolute w-8 h-8 bg-[rgb(255,250,97)] rounded-full right-0 top-1/4 animate-bounce delay-300"></div>
      <div className="absolute w-8 h-8 bg-[rgb(255,250,97)] rounded-full left-1/4 bottom-0 animate-bounce delay-200"></div>
      <div className="absolute w-8 h-8 bg-[rgb(255,250,97)] rounded-full right-1/4 bottom-0 animate-bounce delay-100"></div>
      <div className="absolute w-full h-full border-2 border-dashed border-[rgb(37,108,250)] rounded-full animate-spin-slow"></div>
    </div>
  );
};

const CounterAnimation = ({ target, label }: { target: number, label: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animationDuration = 2000;

          function animate(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            setCount(Math.floor(progress * target));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [target, hasAnimated]);

  return (
    <div ref={sectionRef} className="text-center">
      <div className="text-5xl font-bold text-[rgb(37,108,250)]">{count}+</div>
      <div className="text-black mt-2">{label}</div>
    </div>
  );
};

const AnimatedCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-700 ${delay} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="w-16 h-16 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mb-6 mx-auto text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-4 text-[rgb(37,108,250)]">{title}</h3>
      <p className="text-black text-center">{description}</p>
    </div>
  );
};

const ParallaxSection = ({ children, bgColor }: { children: React.ReactNode, bgColor: string }) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const newOffset = window.scrollY - top - window.scrollY;
        setOffset(newOffset * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={`relative py-20 ${bgColor} overflow-hidden`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <About />

      {/* Stats Section with Counters */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[rgb(37,108,250)] mb-16">
            MalaySTEM Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <CounterAnimation target={5000} label="Students Reached" />
            <CounterAnimation target={150} label="Schools Partnered" />
            <CounterAnimation target={85} label="Success Rate %" />
            <CounterAnimation target={25} label="Corporate Partners" />
          </div>
        </div>
      </section>

      {/* Molecular Animation Section */}
      <ParallaxSection bgColor="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[rgb(37,108,250)] mb-6">
                STEM Education for the Future
              </h2>
              <p className="text-black mb-4">
                In today's rapidly evolving technological landscape, STEM education is more critical than ever for Malaysian students. 
                By developing skills in Science, Technology, Engineering, and Mathematics, students are prepared for the jobs of tomorrow.
              </p>
              <p className="text-black mb-6">
                Our approach combines theoretical knowledge with practical application, helping students understand complex concepts through 
                hands-on experiences and real-world problem-solving.
              </p>
              <Link 
                href="/quiz" 
                className="px-6 py-2 bg-[rgb(37,108,250)] text-white rounded-full inline-block hover:bg-blue-700 transition-colors"
              >
                Discover Your STEM Path →
              </Link>
            </div>
            <div className="flex justify-center">
              <FloatingMolecule />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Animated Cards Section */}
      <section className="py-20 bg-gradient-to-br from-[rgb(37,108,250)]/10 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[rgb(37,108,250)] mb-4">
            Why STEM Matters
          </h2>
          <p className="text-lg text-black text-center max-w-3xl mx-auto mb-16">
            STEM fields are driving innovation and economic growth in Malaysia and globally.
            Here's why STEM education is vital for your future success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Innovation & Problem Solving"
              description="STEM education fosters innovative thinking and develops critical problem-solving skills essential for addressing complex global challenges."
              delay="delay-0"
            />
            <AnimatedCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Career Opportunities"
              description="STEM careers are among the fastest-growing and highest-paying jobs worldwide, offering excellent opportunities for professional advancement."
              delay="delay-200"
            />
            <AnimatedCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Economic Growth"
              description="STEM industries are driving Malaysia's economic transformation, creating new markets and opportunities for sustainable development."
              delay="delay-400"
            />
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[rgb(37,108,250)] mb-16">
            Your STEM Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgb(37,108,250)]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 relative">
              <TimelineItem 
                title="Discover Your Interests" 
                description="Take our comprehensive STEM assessment to identify your natural aptitudes and areas of interest across science, technology, engineering, and mathematics."
                link="/quiz"
                linkText="Start Quiz"
                position="left"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
              />
              
              <TimelineItem 
                title="Explore Career Paths" 
                description="Learn about the diverse range of STEM careers available in Malaysia and globally, including education requirements, salary expectations, and job outlooks."
                link="/career-paths"
                linkText="View Careers"
                position="right"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              
              <TimelineItem 
                title="Get Personalized Guidance" 
                description="Speak with our AI counselor to receive customized advice based on your quiz results, academic background, and career aspirations."
                link="/counselor"
                linkText="Talk to Counselor"
                position="left"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                }
              />
              
              <TimelineItem 
                title="Access Learning Resources" 
                description="Get access to curated educational materials, tutorials, and practice exercises to help you develop your skills in your chosen STEM field."
                link="/quiz"
                linkText="Explore Resources"
                position="right"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated STEM Fields Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[rgb(37,108,250)] mb-4">
            Explore STEM Fields
          </h2>
          <p className="text-lg text-black text-center max-w-3xl mx-auto mb-16">
            STEM encompasses a wide range of exciting disciplines. Discover the diverse fields within STEM and find your passion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StemFieldCard 
              title="Science" 
              description="Explore biology, chemistry, physics, and more to understand the natural world through observation and experimentation."
              color="from-blue-500 to-green-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              }
            />
            
            <StemFieldCard 
              title="Technology" 
              description="Dive into computer science, programming, artificial intelligence, and other technologies shaping our digital future."
              color="from-purple-500 to-indigo-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            
            <StemFieldCard 
              title="Engineering" 
              description="Design and build solutions to real-world problems in fields like civil, mechanical, electrical, and chemical engineering."
              color="from-red-500 to-yellow-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            
            <StemFieldCard 
              title="Mathematics" 
              description="Develop analytical thinking through the study of numbers, quantities, and shapes that form the foundation of STEM disciplines."
              color="from-green-500 to-teal-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <ParallaxSection bgColor="bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[rgb(37,108,250)] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-black text-center max-w-3xl mx-auto mb-16">
            Meet Malaysian students who discovered their passion for STEM and are now pursuing successful careers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStoryCard 
              name="Aisha Rahman"
              role="Biomedical Engineer"
              story="Growing up in a rural area of Malaysia, I never thought a career in biomedical engineering was possible. MalaySTEM's career guidance helped me find scholarships and mentorship that changed my life."
              image="/images/placeholder.jpg"
            />
            
            <SuccessStoryCard 
              name="Raj Patel"
              role="Software Developer"
              story="I was struggling to choose between my interest in art and technology. The STEM quiz showed me that UX design was a perfect fit for my skills, and now I'm working at a top tech company in Kuala Lumpur."
              image="/images/placeholder.jpg"
            />
            
            <SuccessStoryCard 
              name="Ming Lin"
              role="Environmental Scientist"
              story="The AI counselor helped me understand how I could combine my passion for nature with scientific research. Now I'm working on conservation projects that are making a real difference in Malaysia."
              image="/images/placeholder.jpg"
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Call to Action */}
      <section className="py-20 bg-[rgb(37,108,250)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your STEM Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Take our free STEM assessment quiz today and discover which fields align with your natural talents and interests.
          </p>
          <Link 
            href="/quiz" 
            className="px-8 py-4 bg-[rgb(255,250,97)] text-[rgb(37,108,250)] text-xl font-bold rounded-full inline-block hover:bg-yellow-300 transition-colors"
          >
            Take the Free Quiz
          </Link>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[rgb(37,108,250)] mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-black text-center max-w-3xl mx-auto mb-16">
            We collaborate with leading educational institutions, companies, and organizations to provide the best resources for Malaysian students.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="University of Malaya" />
            <PartnerLogo name="Malaysia Digital Economy Corporation" />
            <PartnerLogo name="Petronas" />
            <PartnerLogo name="Microsoft Malaysia" />
            <PartnerLogo name="Intel Malaysia" />
            <PartnerLogo name="Khazanah Nasional" />
            <PartnerLogo name="IBM Malaysia" />
            <PartnerLogo name="Ministry of Education" />
          </div>
        </div>
      </section>
      </main>
  );
}

// Helper components
const TimelineItem = ({ title, description, link, linkText, position, icon }: 
  { title: string, description: string, link: string, linkText: string, position: string, icon: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div ref={itemRef} className={`md:flex items-center ${position === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <div 
        className={`md:w-5/12 p-6 bg-white rounded-lg shadow-lg ${
          isVisible 
            ? 'opacity-100 ' + (position === 'left' ? 'translate-x-0' : 'translate-x-0') 
            : 'opacity-0 ' + (position === 'left' ? '-translate-x-12' : 'translate-x-12')
        } transition-all duration-700 ease-out`}
      >
        <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-3">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        <Link 
          href={link} 
          className="text-[rgb(37,108,250)] font-semibold hover:text-blue-700 transition-colors"
        >
          {linkText} →
        </Link>
      </div>
      
      {/* Timeline dot */}
      <div className="hidden md:flex justify-center md:w-2/12">
        <div 
          className={`w-12 h-12 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center text-white z-10 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          } transition-all duration-700 delay-300`}
        >
          {icon}
        </div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
};

const StemFieldCard = ({ title, description, color, icon }: 
  { title: string, description: string, color: string, icon: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80`}></div>
      <div className={`absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
      
      <div className="relative px-6 py-8 text-center text-white h-full flex flex-col justify-between">
        <div className={`mx-auto mb-4 transform transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SuccessStoryCard = ({ name, role, story, image }: 
  { name: string, role: string, story: string, image: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 bg-gray-200 relative">
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <span className="text-[rgb(37,108,250)] text-4xl font-bold">{name.charAt(0)}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[rgb(37,108,250)]">{name}</h3>
        <p className="text-black font-medium mb-3">{role}</p>
        <p className="text-black italic">{story}</p>
      </div>
    </div>
  );
};

const PartnerLogo = ({ name }: { name: string }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md">
      <p className="text-[rgb(37,108,250)] font-bold text-center">{name}</p>
    </div>
  );
};
