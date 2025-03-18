"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface STEMSubject {
  title: string;
  description: string;
  subfields: string[];
  skills: string[];
  careers: string[];
  educationPaths: string[];
  malaysiaContext: string;
}

export default function CareerPathSection() {
  const [selectedCategory, setSelectedCategory] = useState('technology');
  const [selectedSubject, setSelectedSubject] = useState<STEMSubject | null>(null);
  
  const technologySubjects: STEMSubject[] = [
    {
      title: "Computer Science",
      description: "The study of computers and computational systems including their theory, design, development, and application. Core areas include algorithms, data structures, programming languages, computer architecture, and artificial intelligence.",
      subfields: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Graphics",
        "Human-Computer Interaction",
        "Computer Networks",
        "Cybersecurity"
      ],
      skills: [
        "Programming (multiple languages)",
        "Algorithm design and analysis",
        "Problem-solving",
        "Data structure implementation",
        "System design",
        "Computational thinking"
      ],
      careers: [
        "Software Engineer",
        "Data Scientist",
        "AI/ML Engineer",
        "Systems Architect",
        "Game Developer",
        "Cybersecurity Specialist"
      ],
      educationPaths: [
        "Bachelor's in Computer Science",
        "Master's in specialized fields (AI, Security, etc.)",
        "PhD for research and academic positions",
        "Professional certifications (AWS, Microsoft, Cisco)"
      ],
      malaysiaContext: "Malaysia's Digital Economy Blueprint aims to develop 20,000 cybersecurity knowledge workers by 2025. Computer Science graduates are highly sought after, with MSC Malaysia status companies offering competitive salaries and opportunities for specialized roles."
    },
    {
      title: "Data Science",
      description: "An interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from structured and unstructured data, and apply knowledge from data across a broad range of application domains.",
      subfields: [
        "Big Data Analytics",
        "Statistical Analysis",
        "Data Mining",
        "Predictive Modeling",
        "Natural Language Processing",
        "Computer Vision"
      ],
      skills: [
        "Statistical analysis",
        "Programming (Python, R)",
        "Data visualization",
        "Machine learning",
        "Database management",
        "Big data technologies"
      ],
      careers: [
        "Data Scientist",
        "Data Engineer",
        "Business Intelligence Analyst",
        "Machine Learning Engineer",
        "Research Scientist",
        "Data Architect"
      ],
      educationPaths: [
        "Bachelor's in Data Science, Computer Science, or Statistics",
        "Master's in Data Science or Analytics",
        "Professional certifications (Microsoft, IBM, Google)",
        "Specialized bootcamps with project portfolios"
      ],
      malaysiaContext: "The Malaysia Digital Economy Corporation (MDEC) has established the ASEAN Data Analytics Exchange (ADAX) to build a sustainable data science ecosystem. Malaysian universities including UM, USM, and UPM now offer dedicated Data Science programs to meet growing industry demand."
    },
    {
      title: "Information Technology",
      description: "The study of computer systems, networks, and infrastructure used to create, process, store, secure, and exchange electronic data. Focuses on practical applications of technology in business and organizational settings.",
      subfields: [
        "Network Infrastructure",
        "System Administration",
        "Cloud Computing",
        "IT Security",
        "Database Management",
        "Enterprise Systems"
      ],
      skills: [
        "Network configuration",
        "System administration",
        "Cloud platform knowledge",
        "Cybersecurity implementation",
        "Database management",
        "IT service management"
      ],
      careers: [
        "IT Manager",
        "Network Administrator",
        "Systems Analyst",
        "Cloud Architect",
        "Database Administrator",
        "Information Security Analyst"
      ],
      educationPaths: [
        "Bachelor's in Information Technology or Information Systems",
        "Industry certifications (CompTIA, Cisco, Microsoft)",
        "Master's in specialized IT fields",
        "Professional development courses"
      ],
      malaysiaContext: "Malaysia's MSC Malaysia status provides tax incentives for IT companies, creating strong demand for IT professionals. The country is positioning itself as a regional hub for IT outsourcing and shared services, with MDEC initiatives supporting the development of the IT workforce."
    },
    {
      title: "Software Engineering",
      description: "The systematic application of engineering approaches to the development of software systems. Focuses on developing, maintaining, testing, and evaluating software applications through well-defined methodologies.",
      subfields: [
        "Web Development",
        "Mobile Application Development",
        "DevOps",
        "Software Architecture",
        "Quality Assurance",
        "Embedded Systems"
      ],
      skills: [
        "Software development lifecycle",
        "Version control systems",
        "Testing methodologies",
        "Design patterns",
        "Agile development practices",
        "CI/CD pipelines"
      ],
      careers: [
        "Software Engineer",
        "Full-Stack Developer",
        "DevOps Engineer",
        "Quality Assurance Engineer",
        "Mobile App Developer",
        "Software Architect"
      ],
      educationPaths: [
        "Bachelor's in Software Engineering or Computer Science",
        "Professional certifications (AWS, Azure, Scrum)",
        "Coding bootcamps",
        "Master's in specialized areas"
      ],
      malaysiaContext: "Malaysia hosts development centers for global tech companies like Intel, Dell, and IBM, creating demand for software engineers. The Malaysia Software Engineering Standards provides guidelines for software development practices, while initiatives like Digital Perak aim to create technology hubs throughout the country."
    }
  ];
  
  const scienceSubjects: STEMSubject[] = [
    {
      title: "Chemistry",
      description: "The scientific study of the properties, composition, structure, and changes of matter. Examines atoms, molecules, and their interactions to understand and manipulate materials and create new substances.",
      subfields: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Analytical Chemistry",
        "Biochemistry",
        "Environmental Chemistry"
      ],
      skills: [
        "Laboratory techniques",
        "Chemical analysis",
        "Experimental design",
        "Data interpretation",
        "Safety protocols",
        "Scientific reporting"
      ],
      careers: [
        "Research Chemist",
        "Analytical Chemist",
        "Pharmaceutical Scientist",
        "Materials Scientist",
        "Environmental Chemist",
        "Chemical Engineer"
      ],
      educationPaths: [
        "Bachelor's in Chemistry",
        "Master's in specialized chemistry fields",
        "PhD for research positions",
        "Professional certifications"
      ],
      malaysiaContext: "Malaysia's natural resources and biodiversity create unique opportunities for natural product chemistry. The petrochemical industry, led by PETRONAS, employs many chemists, while the pharmaceutical and biotechnology sectors are growing areas for chemistry graduates."
    },
    {
      title: "Biology",
      description: "The natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development, and evolution.",
      subfields: [
        "Molecular Biology",
        "Ecology",
        "Genetics",
        "Microbiology",
        "Botany",
        "Zoology",
        "Marine Biology"
      ],
      skills: [
        "Laboratory techniques",
        "Microscopy",
        "Experimental design",
        "Statistical analysis",
        "Field research methods",
        "Scientific writing"
      ],
      careers: [
        "Biologist",
        "Microbiologist",
        "Geneticist",
        "Ecologist",
        "Marine Biologist",
        "Biotechnologist"
      ],
      educationPaths: [
        "Bachelor's in Biology or related field",
        "Master's in specialized biology disciplines",
        "PhD for research and academic positions",
        "Professional certifications"
      ],
      malaysiaContext: "Malaysia's biodiversity makes it an ideal location for ecological and conservation biology. The country's BioNexus program supports the development of biotechnology, while research institutions like the Malaysia Genome Institute and Institute for Medical Research offer career opportunities for biologists."
    },
    {
      title: "Physics",
      description: "The natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, with its main goal being to understand how the universe behaves.",
      subfields: [
        "Classical Mechanics",
        "Quantum Physics",
        "Electromagnetism",
        "Thermodynamics",
        "Astrophysics",
        "Nuclear Physics",
        "Optics"
      ],
      skills: [
        "Mathematical modeling",
        "Experimental design",
        "Data analysis",
        "Problem-solving",
        "Computational methods",
        "Instrumentation"
      ],
      careers: [
        "Physicist",
        "Aerospace Engineer",
        "Nuclear Engineer",
        "Geophysicist",
        "Medical Physicist",
        "Quantum Computing Researcher"
      ],
      educationPaths: [
        "Bachelor's in Physics",
        "Master's in specialized physics fields",
        "PhD for research positions",
        "Engineering degrees with physics focus"
      ],
      malaysiaContext: "Malaysia's National Planetarium and the Malaysian Nuclear Agency offer specialized opportunities for physicists. The semiconductor and electronics manufacturing sectors also employ physics graduates, while universities like UM and USM conduct research in areas like theoretical physics and materials science."
    },
    {
      title: "Earth Sciences",
      description: "The study of the Earth's physical structure and substance, its history, and the processes that act upon it. Includes geology, meteorology, oceanography, and environmental science.",
      subfields: [
        "Geology",
        "Meteorology",
        "Oceanography",
        "Environmental Science",
        "Hydrology",
        "Geophysics"
      ],
      skills: [
        "Field sampling techniques",
        "GIS and remote sensing",
        "Laboratory analysis",
        "Data interpretation",
        "Environmental assessment",
        "Climate modeling"
      ],
      careers: [
        "Geologist",
        "Meteorologist",
        "Environmental Scientist",
        "Oceanographer",
        "Hydrologist",
        "GIS Specialist"
      ],
      educationPaths: [
        "Bachelor's in Earth Sciences, Geology, or Environmental Science",
        "Master's in specialized fields",
        "PhD for research positions",
        "Professional certifications"
      ],
      malaysiaContext: "Malaysia's natural resources sector, including oil and gas exploration, creates demand for geologists. The country's commitment to environmental sustainability and climate action plans provides opportunities for environmental scientists, while the Department of Environment and Malaysian Meteorological Department are key government employers."
    }
  ];
  
  const engineeringSubjects: STEMSubject[] = [
    {
      title: "Mechanical Engineering",
      description: "The discipline that applies engineering physics, mathematics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems. It is one of the oldest and broadest of the engineering disciplines.",
      subfields: [
        "Thermodynamics",
        "Fluid Mechanics",
        "Robotics",
        "Manufacturing",
        "Automotive Engineering",
        "Aerospace Engineering"
      ],
      skills: [
        "CAD/CAM software",
        "Thermodynamic analysis",
        "Material selection",
        "Manufacturing processes",
        "Structural analysis",
        "Mechanical design"
      ],
      careers: [
        "Mechanical Engineer",
        "Automotive Engineer",
        "Aerospace Engineer",
        "Manufacturing Engineer",
        "Robotics Engineer",
        "HVAC Engineer"
      ],
      educationPaths: [
        "Bachelor's in Mechanical Engineering",
        "Professional Engineer (PE) certification",
        "Master's in specialized areas",
        "PhD for research positions"
      ],
      malaysiaContext: "Malaysia's automotive industry, led by Proton and Perodua, creates significant opportunities for mechanical engineers. The aerospace sector is also growing, with companies like Spirit AeroSystems and Airbus establishing operations in Malaysia. The Board of Engineers Malaysia regulates the profession."
    },
    {
      title: "Electrical Engineering",
      description: "The field of engineering that deals with the study and application of electricity, electronics, and electromagnetism. It covers power generation and transmission, electronics, control systems, signal processing, and telecommunications.",
      subfields: [
        "Power Systems",
        "Electronics",
        "Control Systems",
        "Telecommunications",
        "Microelectronics",
        "Signal Processing"
      ],
      skills: [
        "Circuit design",
        "Electronics troubleshooting",
        "Power system analysis",
        "Signal processing",
        "Control system design",
        "Programming embedded systems"
      ],
      careers: [
        "Electrical Engineer",
        "Electronics Engineer",
        "Power Systems Engineer",
        "Control Systems Engineer",
        "Telecommunications Engineer",
        "Microelectronics Engineer"
      ],
      educationPaths: [
        "Bachelor's in Electrical Engineering",
        "Professional Engineer (PE) certification",
        "Master's in specialized areas",
        "Industry certifications"
      ],
      malaysiaContext: "Malaysia's electronics and semiconductor industry, centered in Penang's 'Silicon Valley of the East,' is a major employer of electrical engineers. The national power company Tenaga Nasional Berhad (TNB) and telecommunications companies like Telekom Malaysia and Maxis also offer significant opportunities."
    },
    {
      title: "Civil Engineering",
      description: "A professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, and structural components of buildings.",
      subfields: [
        "Structural Engineering",
        "Geotechnical Engineering",
        "Transportation Engineering",
        "Water Resources Engineering",
        "Environmental Engineering",
        "Construction Engineering"
      ],
      skills: [
        "Structural analysis",
        "CAD and modeling software",
        "Materials testing",
        "Project management",
        "Surveying",
        "Building code knowledge"
      ],
      careers: [
        "Civil Engineer",
        "Structural Engineer",
        "Geotechnical Engineer",
        "Transportation Engineer",
        "Water Resources Engineer",
        "Construction Manager"
      ],
      educationPaths: [
        "Bachelor's in Civil Engineering",
        "Professional Engineer (PE) certification",
        "Master's in specialized areas",
        "Construction management certifications"
      ],
      malaysiaContext: "Malaysia's ongoing infrastructure development, including the East Coast Rail Link and Mass Rapid Transit projects, creates significant demand for civil engineers. Construction companies like Gamuda and IJM are major employers, while the Public Works Department (JKR) offers opportunities in the public sector."
    },
    {
      title: "Chemical Engineering",
      description: "The branch of engineering that applies physical sciences (physics and chemistry), life sciences (microbiology and biochemistry), together with mathematics and economics to design, develop, produce, transform, transport, operate, and manage industrial processes that turn raw materials into valuable products.",
      subfields: [
        "Process Engineering",
        "Biochemical Engineering",
        "Polymer Engineering",
        "Environmental Engineering",
        "Petrochemical Engineering",
        "Food Processing"
      ],
      skills: [
        "Process design",
        "Thermodynamics",
        "Chemical reaction engineering",
        "Fluid dynamics",
        "Heat and mass transfer",
        "Process control"
      ],
      careers: [
        "Chemical Engineer",
        "Process Engineer",
        "Petrochemical Engineer",
        "Biochemical Engineer",
        "Food Processing Engineer",
        "Environmental Engineer"
      ],
      educationPaths: [
        "Bachelor's in Chemical Engineering",
        "Professional Engineer (PE) certification",
        "Master's in specialized areas",
        "PhD for research positions"
      ],
      malaysiaContext: "Malaysia's petrochemical industry, led by PETRONAS, is a major employer of chemical engineers. The palm oil processing sector also creates unique opportunities, with companies like Sime Darby and FGV Holdings operating numerous processing plants. The chemical and pharmaceutical manufacturing sectors are also growing areas for chemical engineering graduates."
    }
  ];
  
  const mathematicsSubjects: STEMSubject[] = [
    {
      title: "Pure Mathematics",
      description: "The study of mathematical concepts independently of any application outside mathematics. It focuses on abstract structures, patterns, and the development of mathematical theories and proofs.",
      subfields: [
        "Algebra",
        "Analysis",
        "Number Theory",
        "Topology",
        "Geometry",
        "Logic"
      ],
      skills: [
        "Mathematical proof techniques",
        "Abstract reasoning",
        "Problem-solving",
        "Logical thinking",
        "Mathematical modeling",
        "Advanced calculus"
      ],
      careers: [
        "Mathematician",
        "University Professor",
        "Research Scientist",
        "Cryptographer",
        "Algorithm Developer",
        "Mathematical Modeler"
      ],
      educationPaths: [
        "Bachelor's in Mathematics",
        "Master's in Pure Mathematics",
        "PhD for research and academic positions",
        "Specialized courses in advanced topics"
      ],
      malaysiaContext: "Malaysian universities like UM, UPM, and USM have active research programs in pure mathematics. Government research institutions like the Institute for Mathematical Research (INSPEM) at UPM conduct advanced research, while cryptography positions in financial and government sectors offer applied opportunities for pure mathematicians."
    },
    {
      title: "Applied Mathematics",
      description: "The application of mathematical methods to solve problems in science, engineering, business, and industry. This field develops mathematical models, computational methods, and algorithms to analyze and solve real-world problems.",
      subfields: [
        "Computational Mathematics",
        "Mathematical Modeling",
        "Operations Research",
        "Financial Mathematics",
        "Biomathematics",
        "Mathematical Physics"
      ],
      skills: [
        "Mathematical modeling",
        "Computational methods",
        "Differential equations",
        "Statistical analysis",
        "Numerical methods",
        "Programming"
      ],
      careers: [
        "Operations Research Analyst",
        "Quantitative Analyst",
        "Mathematical Modeler",
        "Computational Scientist",
        "Systems Analyst",
        "Bioinformatician"
      ],
      educationPaths: [
        "Bachelor's in Applied Mathematics or Mathematics",
        "Master's in specialized fields",
        "PhD for research positions",
        "Professional certifications"
      ],
      malaysiaContext: "Malaysia's financial sector, including Islamic finance institutions, employs applied mathematicians for quantitative analysis and modeling. The growing importance of operations research in logistics and supply chain management, particularly for companies like AirAsia and major manufacturing operations, creates opportunities for graduates with applied mathematics skills."
    },
    {
      title: "Statistics",
      description: "The mathematical science dealing with the collection, analysis, interpretation, and presentation of masses of numerical data. It involves developing and studying methods for collecting, analyzing, interpreting, and presenting empirical data.",
      subfields: [
        "Mathematical Statistics",
        "Bayesian Statistics",
        "Biostatistics",
        "Computational Statistics",
        "Survey Methodology",
        "Time Series Analysis"
      ],
      skills: [
        "Statistical analysis",
        "Experimental design",
        "Data collection methods",
        "Statistical programming (R, Python)",
        "Statistical modeling",
        "Hypothesis testing"
      ],
      careers: [
        "Statistician",
        "Biostatistician",
        "Data Analyst",
        "Market Research Analyst",
        "Epidemiologist",
        "Sports Statistician"
      ],
      educationPaths: [
        "Bachelor's in Statistics or Mathematics",
        "Master's in Statistics or specialized fields",
        "PhD for research positions",
        "Professional certifications"
      ],
      malaysiaContext: "The Department of Statistics Malaysia (DOSM) is a significant employer of statisticians in the public sector. Private sector opportunities include market research firms, healthcare organizations, and the growing field of sports analytics. Malaysian universities increasingly offer specialized statistics programs to meet the demand for quantitative skills across industries."
    },
    {
      title: "Computational Science",
      description: "An interdisciplinary field that uses advanced computing capabilities to understand and solve complex problems. It combines computer simulation, mathematical modeling, quantitative analysis, and data science to address challenges in science and engineering.",
      subfields: [
        "Scientific Computing",
        "Simulation Science",
        "High-Performance Computing",
        "Computational Fluid Dynamics",
        "Computational Chemistry",
        "Computational Biology"
      ],
      skills: [
        "High-performance computing",
        "Parallel programming",
        "Numerical methods",
        "Simulation techniques",
        "Algorithm development",
        "Data visualization"
      ],
      careers: [
        "Computational Scientist",
        "Scientific Software Developer",
        "Simulation Engineer",
        "Research Scientist",
        "Computational Biologist",
        "High-Performance Computing Specialist"
      ],
      educationPaths: [
        "Bachelor's in Computational Science, Mathematics, or Computer Science",
        "Master's in computational fields",
        "PhD for research positions",
        "Specialized training in HPC"
      ],
      malaysiaContext: "Malaysia has invested in high-performance computing facilities, including the Malaysian Institute of Microelectronic Systems (MIMOS) supercomputing facilities. Research in computational science is conducted at major universities including UM and UTM, while industries such as oil and gas (PETRONAS) employ computational scientists for complex simulations and modeling."
    }
  ];
  
  const allSubjects = {
    technology: technologySubjects,
    science: scienceSubjects,
    engineering: engineeringSubjects,
    mathematics: mathematicsSubjects
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubject(null);
  };
  
  const handleSubjectSelect = (subject: STEMSubject) => {
    setSelectedSubject(subject);
  };

  return (
    <section id="career-paths" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[rgb(37,108,250)] mb-4">Explore STEM Subjects</h2>
          <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Discover the diverse range of exciting and rewarding STEM subjects and disciplines. Each field offers unique 
            educational pathways and career opportunities in Science, Technology, Engineering, and Mathematics.
          </p>
        </div>
        
        {/* Category Selection Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          <button 
            onClick={() => handleCategoryChange('technology')}
            className={`px-6 py-3 mx-2 mb-2 rounded-full font-bold transition-colors ${
              selectedCategory === 'technology' 
                ? 'bg-[rgb(37,108,250)] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Technology
          </button>
          <button 
            onClick={() => handleCategoryChange('science')}
            className={`px-6 py-3 mx-2 mb-2 rounded-full font-bold transition-colors ${
              selectedCategory === 'science' 
                ? 'bg-[rgb(37,108,250)] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Science
          </button>
          <button 
            onClick={() => handleCategoryChange('engineering')}
            className={`px-6 py-3 mx-2 mb-2 rounded-full font-bold transition-colors ${
              selectedCategory === 'engineering' 
                ? 'bg-[rgb(37,108,250)] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Engineering
          </button>
          <button 
            onClick={() => handleCategoryChange('mathematics')}
            className={`px-6 py-3 mx-2 mb-2 rounded-full font-bold transition-colors ${
              selectedCategory === 'mathematics' 
                ? 'bg-[rgb(37,108,250)] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Mathematics
          </button>
        </div>
        
        {/* Subject Cards Grid */}
        {!selectedSubject && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {allSubjects[selectedCategory as keyof typeof allSubjects].map((subject, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[rgb(37,108,250)] cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => handleSubjectSelect(subject)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center mb-4 text-[rgb(37,108,250)]">{subject.title}</h3>
                  <p className="text-black mb-6 text-sm">{subject.description}</p>
                  
                  <div className="mt-4 text-center">
                    <button className="text-[rgb(37,108,250)] border border-[rgb(37,108,250)] px-4 py-2 rounded-lg hover:bg-[rgb(37,108,250)] hover:text-white transition-colors">
                      Explore Subject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Detailed Subject View */}
        {selectedSubject && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[rgb(37,108,250)] mb-12">
            <div className="p-8">
              <button 
                onClick={() => setSelectedSubject(null)}
                className="text-[rgb(37,108,250)] mb-4 flex items-center hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Subjects
              </button>
              
              <h3 className="text-3xl font-bold mb-4 text-[rgb(37,108,250)]">{selectedSubject.title}</h3>
              <p className="text-black mb-8 text-lg">{selectedSubject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[rgb(37,108,250)]">Major Subfields</h4>
                  <ul className="space-y-2">
                    {selectedSubject.subfields.map((subfield, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-black">{subfield}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[rgb(37,108,250)]">Key Skills Developed</h4>
                  <ul className="space-y-2">
                    {selectedSubject.skills.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-black">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-[rgb(37,108,250)]">Education Pathways</h4>
                  <ul className="space-y-2">
                    {selectedSubject.educationPaths.map((path, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(37,108,250)] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-black">{path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-[rgb(37,108,250)]">Related Careers</h4>
                  <ul className="space-y-2">
                    {selectedSubject.careers.map((career, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgb(37,108,250)] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-black">{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-4 text-[rgb(37,108,250)]">Malaysian Context</h4>
                <p className="text-black">{selectedSubject.malaysiaContext}</p>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/counselor"
                  className="px-8 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full inline-block hover:bg-blue-600 transition-colors"
                >
                  Get Personalized Subject Guidance
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {!selectedSubject && (
          <div className="mt-12 text-center">
            <Link 
              href="/counselor"
              className="px-8 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full inline-block hover:bg-blue-600 transition-colors"
            >
              Get Personalized Subject Guidance
            </Link>
          </div>
        )}
      </div>
    </section>
  );
} 