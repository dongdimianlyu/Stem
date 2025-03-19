"use client";

import Link from 'next/link';

interface JobRole {
  title: string;
  description: string;
  requirements: string[];
  salary: string;
  growth: string;
}

interface LearningResource {
  title: string;
  type: string;
  description: string;
  difficulty: number;
  link: string;
  duration?: string;
}

export default function OrganicChemistryPage() {
  // Career data
  const careers: JobRole[] = [
    {
      title: "Medicinal Chemist",
      description: "Designs and develops new pharmaceutical compounds and improve existing drugs by studying their chemical properties and biological effects.",
      requirements: [
        "Ph.D. in Organic Chemistry or Medicinal Chemistry",
        "Strong background in synthetic organic chemistry",
        "Experience with drug discovery processes",
        "Knowledge of structure-activity relationships"
      ],
      salary: "RM 80,000 - RM 150,000 annually",
      growth: "Moderate growth (5-7% annually)"
    },
    {
      title: "Process Development Chemist",
      description: "Develops and optimizes chemical processes for the efficient and cost-effective production of chemical compounds at industrial scale.",
      requirements: [
        "M.Sc. or Ph.D. in Organic Chemistry",
        "Experience with scale-up procedures",
        "Knowledge of chemical engineering principles",
        "Understanding of green chemistry practices"
      ],
      salary: "RM 70,000 - RM 120,000 annually",
      growth: "Stable growth (4-6% annually)"
    },
    {
      title: "Polymer Scientist",
      description: "Researches and develops new polymeric materials with specific properties for applications in various industries including plastics, textiles, and biomaterials.",
      requirements: [
        "M.Sc. or Ph.D. in Polymer Chemistry or Organic Chemistry",
        "Experience with polymer synthesis and characterization",
        "Knowledge of material science",
        "Understanding of structure-property relationships"
      ],
      salary: "RM 75,000 - RM 130,000 annually",
      growth: "High growth (7-9% annually)"
    },
    {
      title: "Quality Control Chemist",
      description: "Conducts analytical tests to ensure the quality, purity, and safety of raw materials, intermediate products, and finished goods in the chemical or pharmaceutical industry.",
      requirements: [
        "B.Sc. in Chemistry or related field",
        "Knowledge of analytical techniques",
        "Understanding of quality management systems",
        "Attention to detail and problem-solving skills"
      ],
      salary: "RM 48,000 - RM 90,000 annually",
      growth: "Stable growth (3-5% annually)"
    }
  ];
  
  // Learning resources
  const beginnerResources: LearningResource[] = [
    {
      title: "Introduction to Organic Chemistry - Khan Academy",
      type: "Video Course",
      description: "Comprehensive introduction to the basics of organic chemistry, including nomenclature, bonding, and functional groups.",
      difficulty: 3,
      link: "https://www.khanacademy.org/science/organic-chemistry",
      duration: "15+ hours"
    },
    {
      title: "Organic Chemistry - ChemGuide",
      type: "Tutorial Website",
      description: "Clear explanations of fundamental organic chemistry concepts with practice problems and visual aids.",
      difficulty: 2,
      link: "https://www.chemguide.co.uk/orgpropsmenu.html",
      duration: "Self-paced"
    },
    {
      title: "Crash Course Organic Chemistry",
      type: "Video Series",
      description: "Fast-paced, engaging introduction to organic chemistry fundamentals with visual explanations.",
      difficulty: 3,
      link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4",
      duration: "5-7 hours"
    }
  ];
  
  const intermediateResources: LearningResource[] = [
    {
      title: "Organic Chemistry as a Second Language - David Klein",
      type: "Textbook",
      description: "Popular textbook that breaks down complex organic chemistry concepts into digestible explanations with plenty of practice problems.",
      difficulty: 5,
      link: "https://www.wiley.com/en-us/Organic+Chemistry+as+a+Second+Language%3A+First+Semester+Topics%2C+5th+Edition-p-9781119110668"
    },
    {
      title: "MIT OpenCourseWare - Organic Chemistry I",
      type: "University Course",
      description: "Full university course including lecture videos, notes, and problem sets covering core organic chemistry principles.",
      difficulty: 6,
      link: "https://ocw.mit.edu/courses/chemistry/5-12-organic-chemistry-i-spring-2005/",
      duration: "40+ hours"
    },
    {
      title: "Master Organic Chemistry",
      type: "Website",
      description: "Blog-style website with in-depth articles explaining reaction mechanisms and providing study strategies.",
      difficulty: 5,
      link: "https://www.masterorganicchemistry.com/",
      duration: "Self-paced"
    }
  ];
  
  const advancedResources: LearningResource[] = [
    {
      title: "Advanced Organic Chemistry - Carey & Sundberg",
      type: "Textbook",
      description: "Comprehensive graduate-level textbook covering reaction mechanisms and structure in great detail.",
      difficulty: 9,
      link: "https://www.springer.com/gp/book/9780387683546"
    },
    {
      title: "Organic Synthesis: Strategy and Control - Wyatt & Warren",
      type: "Textbook",
      description: "Advanced textbook focusing on synthetic strategy and retrosynthetic analysis for complex molecules.",
      difficulty: 8,
      link: "https://www.wiley.com/en-us/Organic+Synthesis%3A+Strategy+and+Control-p-9780471929635"
    },
    {
      title: "Journal of Organic Chemistry",
      type: "Academic Journal",
      description: "Peer-reviewed research articles on the latest developments in organic chemistry.",
      difficulty: 10,
      link: "https://pubs.acs.org/journal/joceah"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Link href="/resources/chemistry" className="text-[rgb(37,108,250)] hover:text-blue-700 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Chemistry Resources
              </Link>
              <h1 className="text-4xl font-bold text-[rgb(37,108,250)]">Organic Chemistry</h1>
            </div>
            <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
          </div>
          
          {/* Introduction */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="w-24 h-24 bg-[rgb(37,108,250)]/10 rounded-full flex items-center justify-center text-[rgb(37,108,250)] text-5xl font-bold mb-4 md:mb-0 md:mr-6">
                C
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-2">What is Organic Chemistry?</h2>
                <p className="text-black mb-4">
                  Organic chemistry is the study of the structure, properties, composition, reactions, and preparation 
                  of carbon-containing compounds. These compounds may contain not only carbon and hydrogen, but also oxygen, 
                  nitrogen, sulfur, phosphorus, and halogens.
                </p>
                <p className="text-black">
                  Often described as the "chemistry of life," organic chemistry plays a crucial role in biochemistry, 
                  pharmaceuticals, petroleum science, and material science. It's a challenging but rewarding field that 
                  offers diverse career opportunities and contributes to many technological advancements.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Key Concepts</h3>
                <ul className="list-disc list-inside text-black text-sm">
                  <li>Carbon bonding & hybridization</li>
                  <li>Functional groups & nomenclature</li>
                  <li>Reaction mechanisms</li>
                  <li>Stereochemistry & isomerism</li>
                  <li>Spectroscopy & structure determination</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Major Applications</h3>
                <ul className="list-disc list-inside text-black text-sm">
                  <li>Drug development & pharmaceuticals</li>
                  <li>Polymers & plastics</li>
                  <li>Petroleum products & fuels</li>
                  <li>Agrochemicals & pesticides</li>
                  <li>Dyes, flavors & fragrances</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Related Fields</h3>
                <ul className="list-disc list-inside text-black text-sm">
                  <li>Biochemistry</li>
                  <li>Medicinal chemistry</li>
                  <li>Polymer science</li>
                  <li>Petrochemistry</li>
                  <li>Material science</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">Difficulty Assessment</h3>
              <div className="flex items-center mb-2">
                <span className="text-black font-semibold mr-4">Overall Difficulty:</span>
                <div className="bg-gray-200 h-3 flex-grow rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="ml-4 font-bold text-black">7/10</span>
              </div>
              <p className="text-black text-sm italic">
                Organic chemistry is considered challenging due to its abstract concepts, vast amount of information to memorize,
                and the need to visualize 3D molecular structures. Success requires strong spatial reasoning,
                pattern recognition, and consistent practice with mechanisms and reactions.
              </p>
            </div>
          </div>
          
          {/* Career Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Career Paths in Organic Chemistry</h2>
            
            <div className="space-y-6">
              {careers.map((career, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-2">{career.title}</h3>
                  <p className="text-black mb-4">{career.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-black text-sm">
                        {career.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">Annual Salary (Malaysia)</h4>
                      <p className="text-black text-sm">{career.salary}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">Career Growth</h4>
                      <p className="text-black text-sm">{career.growth}</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">Malaysian Opportunities</h4>
                    <p className="text-black text-sm">
                      {career.title === "Medicinal Chemist" && "Pharmaceutical companies like Duopharma Biotech, Chemical Company of Malaysia (CCM), and research institutes such as Malaysian Institute of Pharmaceuticals and Nutraceuticals (IPharm) offer positions in this field."}
                      {career.title === "Process Development Chemist" && "Petrochemical companies like PETRONAS, Lotte Chemical Titan, and multinational corporations with Malaysian manufacturing facilities such as BASF and Dow Chemical offer roles for process chemists."}
                      {career.title === "Polymer Scientist" && "Companies like Toray Malaysia, Top Glove, Hartalega, and various plastic manufacturing companies in Malaysia seek polymer experts for R&D and production improvement."}
                      {career.title === "Quality Control Chemist" && "Pharmaceutical companies, food manufacturers, chemical producers, and testing laboratories such as Intertek and SGS Malaysia offer numerous QC positions across the country."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Learning Path */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Learning Resources with Difficulty Ratings</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-4 flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">Level 1-3</span>
                Beginner Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {beginnerResources.map((resource, index) => (
                  <a 
                    key={index} 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">{resource.title}</h4>
                      <span className={`text-xs font-bold rounded-full px-2 py-1 ${
                        resource.difficulty <= 3 ? 'bg-green-100 text-green-800' : 
                        resource.difficulty <= 6 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        Difficulty: {resource.difficulty}/10
                      </span>
                    </div>
                    <p className="text-sm text-black mb-2">{resource.type} {resource.duration && `• ${resource.duration}`}</p>
                    <p className="text-sm text-black">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-4 flex items-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">Level 4-7</span>
                Intermediate Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {intermediateResources.map((resource, index) => (
                  <a 
                    key={index} 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">{resource.title}</h4>
                      <span className={`text-xs font-bold rounded-full px-2 py-1 ${
                        resource.difficulty <= 3 ? 'bg-green-100 text-green-800' : 
                        resource.difficulty <= 6 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        Difficulty: {resource.difficulty}/10
                      </span>
                    </div>
                    <p className="text-sm text-black mb-2">{resource.type} {resource.duration && `• ${resource.duration}`}</p>
                    <p className="text-sm text-black">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-4 flex items-center">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">Level 8-10</span>
                Advanced Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advancedResources.map((resource, index) => (
                  <a 
                    key={index} 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-[rgb(37,108,250)] mb-2">{resource.title}</h4>
                      <span className={`text-xs font-bold rounded-full px-2 py-1 ${
                        resource.difficulty <= 3 ? 'bg-green-100 text-green-800' : 
                        resource.difficulty <= 6 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        Difficulty: {resource.difficulty}/10
                      </span>
                    </div>
                    <p className="text-sm text-black mb-2">{resource.type} {resource.duration && `• ${resource.duration}`}</p>
                    <p className="text-sm text-black">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Study Path Recommendation */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Recommended Study Progression</h2>
            
            <div className="relative">
              <div className="absolute left-0 right-0 h-2 top-1/2 transform -translate-y-1/2 bg-[rgb(37,108,250)]"></div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>1</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 3/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Foundations</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Atomic structure & bonding</li>
                    <li>IUPAC nomenclature</li>
                    <li>Functional groups</li>
                    <li>Basic spectroscopy</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>2</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 6/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Reactions</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Substitution & elimination</li>
                    <li>Addition reactions</li>
                    <li>Carbonyl chemistry</li>
                    <li>Reaction mechanisms</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>3</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 8/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Advanced Topics</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Stereochemistry</li>
                    <li>Multi-step synthesis</li>
                    <li>Advanced spectroscopy</li>
                    <li>Organometallic chemistry</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>4</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 9/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Specialization</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Natural product synthesis</li>
                    <li>Medicinal chemistry</li>
                    <li>Polymer chemistry</li>
                    <li>Research techniques</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">Study Tips from Experts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-black mb-4">
                    <span className="font-bold">1. Focus on mechanisms, not memorization:</span> Understanding the electron flow and reaction mechanisms is more important than memorizing individual reactions.
                  </p>
                  <p className="text-black mb-4">
                    <span className="font-bold">2. Practice drawing structures:</span> Regularly practice drawing organic molecules to improve your understanding of 3D structures and stereochemistry.
                  </p>
                  <p className="text-black">
                    <span className="font-bold">3. Create reaction maps:</span> Organize reactions by functional group transformations to see the connections between different reactions.
                  </p>
                </div>
                <div>
                  <p className="text-black mb-4">
                    <span className="font-bold">4. Work problems regularly:</span> Organic chemistry requires practice. Solve problems daily, not just before exams.
                  </p>
                  <p className="text-black mb-4">
                    <span className="font-bold">5. Use models:</span> Physical or digital molecular models can help visualize 3D structures and understand stereochemistry.
                  </p>
                  <p className="text-black">
                    <span className="font-bold">6. Study in groups:</span> Explaining concepts to others helps solidify your understanding and exposes gaps in your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* YouTube Resources */}
          <div className="bg-[rgb(37,108,250)]/10 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Top YouTube Resources for Organic Chemistry</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">The Organic Chemistry Tutor</h3>
                <p className="text-black mb-3 text-sm">Comprehensive tutorials covering reactions, mechanisms, spectroscopy, and problem-solving techniques.</p>
                <a href="https://www.youtube.com/c/TheOrganicChemistryTutor" target="_blank" rel="noopener noreferrer" className="block w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm text-center">
                  Watch Videos
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Professor Dave Explains</h3>
                <p className="text-black mb-3 text-sm">Clear and concise explanations of fundamental organic chemistry concepts with helpful visual aids.</p>
                <a href="https://www.youtube.com/playlist?list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm" target="_blank" rel="noopener noreferrer" className="block w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm text-center">
                  Watch Videos
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Leah4Sci</h3>
                <p className="text-black mb-3 text-sm">Specialized videos on reaction mechanisms, nomenclature, and exam preparation strategies.</p>
                <a href="https://www.youtube.com/user/Leah4sci" target="_blank" rel="noopener noreferrer" className="block w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm text-center">
                  Watch Videos
                </a>
              </div>
            </div>
          </div>
          
          {/* Malaysian Universities */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Top Malaysian Universities for Organic Chemistry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-2">Universiti Malaya (UM)</h3>
                <p className="text-black mb-4">Offers comprehensive chemistry programs with strong emphasis on organic chemistry and research opportunities in natural products and medicinal chemistry.</p>
                <div className="flex justify-between">
                  <span className="text-sm text-black">
                    <span className="font-semibold">Degrees:</span> B.Sc., M.Sc., Ph.D. in Chemistry
                  </span>
                  <a href="https://www.um.edu.my/" target="_blank" rel="noopener noreferrer" className="text-[rgb(37,108,250)] hover:underline text-sm">
                    Visit Website
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-2">Universiti Sains Malaysia (USM)</h3>
                <p className="text-black mb-4">Known for its strong research focus in organic synthesis, natural products, and pharmaceutical chemistry with modern laboratory facilities.</p>
                <div className="flex justify-between">
                  <span className="text-sm text-black">
                    <span className="font-semibold">Degrees:</span> B.Sc., M.Sc., Ph.D. in Chemistry
                  </span>
                  <a href="https://www.usm.my/" target="_blank" rel="noopener noreferrer" className="text-[rgb(37,108,250)] hover:underline text-sm">
                    Visit Website
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-2">Universiti Kebangsaan Malaysia (UKM)</h3>
                <p className="text-black mb-4">Offers specialized programs in organic chemistry with research strengths in natural product chemistry and organic synthesis methodologies.</p>
                <div className="flex justify-between">
                  <span className="text-sm text-black">
                    <span className="font-semibold">Degrees:</span> B.Sc., M.Sc., Ph.D. in Chemistry
                  </span>
                  <a href="https://www.ukm.my/" target="_blank" rel="noopener noreferrer" className="text-[rgb(37,108,250)] hover:underline text-sm">
                    Visit Website
                  </a>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-2">Universiti Putra Malaysia (UPM)</h3>
                <p className="text-black mb-4">Strong focus on applied organic chemistry with connections to agricultural applications and industrial collaborations in various chemical industries.</p>
                <div className="flex justify-between">
                  <span className="text-sm text-black">
                    <span className="font-semibold">Degrees:</span> B.Sc., M.Sc., Ph.D. in Chemistry
                  </span>
                  <a href="https://www.upm.edu.my/" target="_blank" rel="noopener noreferrer" className="text-[rgb(37,108,250)] hover:underline text-sm">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 