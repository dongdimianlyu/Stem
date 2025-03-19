"use client";

import Link from 'next/link';

interface ChemistryBranchProps {
  title: string;
  description: string;
  icon: string;
  examples: string[];
  applications: string[];
  difficulty: number;
  slug: string;
}

const ChemistryBranch = ({ title, description, icon, examples, applications, difficulty, slug }: ChemistryBranchProps) => {
  return (
    <Link href={`/resources/chemistry/${slug}`} className="block h-full">
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 h-full border-t-4 border-[rgb(37,108,250)] hover:shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-[rgb(37,108,250)]/10 rounded-full flex items-center justify-center text-[rgb(37,108,250)] text-3xl font-bold">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-center text-[rgb(37,108,250)] mb-4">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-[rgb(37,108,250)]">Common Topics:</h4>
          <ul className="list-disc list-inside text-black">
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="font-semibold mb-2 text-[rgb(37,108,250)]">Real-World Applications:</h4>
          <ul className="list-disc list-inside text-black">
            {applications.map((application, index) => (
              <li key={index}>{application}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <span className="text-sm text-black font-semibold">Difficulty:</span>
            <div className="flex items-center">
              <div className="bg-gray-200 h-2 w-32 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    difficulty <= 3 ? 'bg-green-500' : 
                    difficulty <= 6 ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`}
                  style={{ width: `${difficulty * 10}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm font-bold text-black">{difficulty}/10</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface LearningResourceProps {
  title: string;
  type: string;
  difficulty: number;
  duration: string;
  link: string;
}

const LearningResource = ({ title, type, difficulty, duration, link }: LearningResourceProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[rgb(37,108,250)]">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold text-[rgb(37,108,250)]">{title}</h4>
            <p className="text-sm text-black mt-1">{type} • {duration}</p>
          </div>
          <span className={`text-xs font-bold rounded-full px-2 py-1 ${
            difficulty <= 3 ? 'bg-green-100 text-green-800' : 
            difficulty <= 6 ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'
          }`}>
            Level: {difficulty}/10
          </span>
        </div>
      </div>
    </a>
  );
};

export default function ChemistryResourcesPage() {
  const branches = [
    {
      title: "Organic Chemistry",
      description: "The study of carbon compounds and their reactions, particularly those found in living organisms.",
      icon: "C",
      examples: ["Alkanes & Alkenes", "Functional Groups", "Reaction Mechanisms", "Stereochemistry"],
      applications: ["Pharmaceuticals", "Petroleum Industry", "Polymer Science"],
      difficulty: 7,
      slug: "organic"
    },
    {
      title: "Inorganic Chemistry",
      description: "The study of non-carbon compounds, particularly metals and minerals.",
      icon: "I",
      examples: ["Coordination Compounds", "Main Group Elements", "Transition Metals", "Crystal Structures"],
      applications: ["Catalysis", "Materials Science", "Energy Storage"],
      difficulty: 6,
      slug: "inorganic"
    },
    {
      title: "Physical Chemistry",
      description: "The study of the physical principles underlying chemical systems and processes.",
      icon: "P",
      examples: ["Thermodynamics", "Quantum Mechanics", "Kinetics", "Electrochemistry"],
      applications: ["Battery Development", "Surface Science", "Computational Modeling"],
      difficulty: 8,
      slug: "physical"
    },
    {
      title: "Analytical Chemistry",
      description: "The study of methods for determining the composition of materials.",
      icon: "A",
      examples: ["Spectroscopy", "Chromatography", "Mass Spectrometry", "Electroanalytical Methods"],
      applications: ["Quality Control", "Forensic Analysis", "Environmental Monitoring"],
      difficulty: 6,
      slug: "analytical"
    },
    {
      title: "Biochemistry",
      description: "The study of chemical processes within and relating to living organisms.",
      icon: "B",
      examples: ["Proteins & Enzymes", "Nucleic Acids", "Metabolism", "Molecular Genetics"],
      applications: ["Drug Discovery", "Genetic Engineering", "Nutritional Science"],
      difficulty: 7,
      slug: "biochemistry"
    },
    {
      title: "Environmental Chemistry",
      description: "The study of chemical processes occurring in the environment.",
      icon: "E",
      examples: ["Atmospheric Chemistry", "Aquatic Chemistry", "Soil Chemistry", "Pollution Analysis"],
      applications: ["Climate Science", "Remediation Techniques", "Sustainable Chemistry"],
      difficulty: 5,
      slug: "environmental"
    }
  ];

  const topResources = [
    {
      title: "General Chemistry - Khan Academy",
      type: "Video Course",
      difficulty: 3,
      duration: "40+ hours",
      link: "https://www.khanacademy.org/science/chemistry"
    },
    {
      title: "Chemistry - MIT OpenCourseWare",
      type: "University Course",
      difficulty: 7,
      duration: "Semester-length",
      link: "https://ocw.mit.edu/courses/5-111-principles-of-chemical-science-fall-2008/"
    },
    {
      title: "Crash Course Chemistry",
      type: "Video Series",
      difficulty: 4,
      duration: "10 hours",
      link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr"
    },
    {
      title: "Chemistry LibreTexts",
      type: "Open Textbook",
      difficulty: 5,
      duration: "Self-paced",
      link: "https://chem.libretexts.org/"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Link href="/resources" className="text-[rgb(37,108,250)] hover:text-blue-700 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Resources
              </Link>
              <h1 className="text-4xl font-bold text-[rgb(37,108,250)]">Chemistry Resources</h1>
            </div>
            <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto mb-4">
              Chemistry is the scientific study of matter, its properties, and interactions with other matter and energy.
              Explore the various branches of chemistry and dive into specialized topics within each field.
            </p>
            <p className="text-md text-black max-w-3xl mx-auto">
              Click on any branch below to access detailed information about career paths, salary expectations, and learning resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {branches.map((branch, index) => (
              <ChemistryBranch
                key={index}
                title={branch.title}
                description={branch.description}
                icon={branch.icon}
                examples={branch.examples}
                applications={branch.applications}
                difficulty={branch.difficulty}
                slug={branch.slug}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-4">Chemistry Learning Roadmap</h2>
            <p className="text-black mb-6">
              Start your chemistry learning journey with our structured curriculum. This roadmap takes you from fundamental 
              principles to advanced topics, with honest difficulty assessments to help you prepare accordingly.
            </p>
            
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
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Fundamentals</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Atomic Structure</li>
                    <li>Periodic Table</li>
                    <li>Chemical Bonding</li>
                    <li>Basic Nomenclature</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>2</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 5/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Core Concepts</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Chemical Reactions</li>
                    <li>Stoichiometry</li>
                    <li>Thermochemistry</li>
                    <li>Solutions & Equilibrium</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>3</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 7/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Specialized Areas</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Organic Chemistry</li>
                    <li>Inorganic Chemistry</li>
                    <li>Physical Chemistry</li>
                    <li>Analytical Methods</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative">
                    <span>4</span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-2">
                      Difficulty: 9/10
                    </span>
                  </div>
                  <h3 className="font-semibold text-[rgb(37,108,250)] mb-2 text-center mt-6">Advanced Applications</h3>
                  <ul className="text-black text-sm list-disc list-inside">
                    <li>Research Methods</li>
                    <li>Industrial Processes</li>
                    <li>Computational Chemistry</li>
                    <li>Interdisciplinary Applications</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">
                Honest Difficulty Assessment: What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left mb-8">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800">Easy (1-3/10)</h4>
                  <p className="text-sm text-black">
                    Concepts are intuitive, math required is basic, memorization is minimal, 
                    and topics build on common knowledge. Suitable for beginners.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800">Moderate (4-7/10)</h4>
                  <p className="text-sm text-black">
                    Abstract thinking required, moderate math skills needed, 
                    significant memorization, and concepts that may be counterintuitive.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800">Challenging (8-10/10)</h4>
                  <p className="text-sm text-black">
                    Advanced mathematical skills required, highly abstract concepts, 
                    complex problem-solving, and integration of multiple topic areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Top Chemistry Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {topResources.map((resource, index) => (
                <LearningResource
                  key={index}
                  title={resource.title}
                  type={resource.type}
                  difficulty={resource.difficulty}
                  duration={resource.duration}
                  link={resource.link}
                />
              ))}
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">YouTube Channels for Chemistry Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="https://www.youtube.com/c/NileRed" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-semibold text-black">NileRed</h4>
                  <p className="text-xs text-black">Amazing chemistry experiments and demonstrations</p>
                </a>
                <a href="https://www.youtube.com/c/TheOrganicChemistryTutor" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-semibold text-black">The Organic Chemistry Tutor</h4>
                  <p className="text-xs text-black">Comprehensive tutorials on all chemistry topics</p>
                </a>
                <a href="https://www.youtube.com/user/tdewitt451" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-semibold text-black">Professor Dave Explains</h4>
                  <p className="text-xs text-black">Clear explanations of complex chemistry concepts</p>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-[rgb(37,108,250)]/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-4">Interactive Chemistry Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Interactive Periodic Table</h3>
                <p className="text-black mb-3 text-sm">Explore elements with our interactive periodic table, featuring detailed information, visualizations, and real-world applications.</p>
                <button className="w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm">Launch Tool</button>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Virtual Chemistry Lab</h3>
                <p className="text-black mb-3 text-sm">Conduct experiments safely with our virtual lab simulations, covering reactions, titrations, and analytical techniques.</p>
                <button className="w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm">Start Experimenting</button>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Molecular Visualizer</h3>
                <p className="text-black mb-3 text-sm">Visualize chemical structures in 3D, explore molecular geometry, and understand bonding through interactive models.</p>
                <button className="w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm">View Molecules</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 