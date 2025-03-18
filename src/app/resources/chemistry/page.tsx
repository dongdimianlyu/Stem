"use client";

import Link from 'next/link';

interface ChemistryBranchProps {
  title: string;
  description: string;
  icon: string;
  examples: string[];
  applications: string[];
}

const ChemistryBranch = ({ title, description, icon, examples, applications }: ChemistryBranchProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 h-full border-t-4 border-[rgb(37,108,250)]">
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
      <div>
        <h4 className="font-semibold mb-2 text-[rgb(37,108,250)]">Real-World Applications:</h4>
        <ul className="list-disc list-inside text-black">
          {applications.map((application, index) => (
            <li key={index}>{application}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function ChemistryResourcesPage() {
  const branches = [
    {
      title: "Organic Chemistry",
      description: "The study of carbon compounds and their reactions, particularly those found in living organisms.",
      icon: "C",
      examples: ["Alkanes & Alkenes", "Functional Groups", "Reaction Mechanisms", "Stereochemistry"],
      applications: ["Pharmaceuticals", "Petroleum Industry", "Polymer Science"]
    },
    {
      title: "Inorganic Chemistry",
      description: "The study of non-carbon compounds, particularly metals and minerals.",
      icon: "I",
      examples: ["Coordination Compounds", "Main Group Elements", "Transition Metals", "Crystal Structures"],
      applications: ["Catalysis", "Materials Science", "Energy Storage"]
    },
    {
      title: "Physical Chemistry",
      description: "The study of the physical principles underlying chemical systems and processes.",
      icon: "P",
      examples: ["Thermodynamics", "Quantum Mechanics", "Kinetics", "Electrochemistry"],
      applications: ["Battery Development", "Surface Science", "Computational Modeling"]
    },
    {
      title: "Analytical Chemistry",
      description: "The study of methods for determining the composition of materials.",
      icon: "A",
      examples: ["Spectroscopy", "Chromatography", "Mass Spectrometry", "Electroanalytical Methods"],
      applications: ["Quality Control", "Forensic Analysis", "Environmental Monitoring"]
    },
    {
      title: "Biochemistry",
      description: "The study of chemical processes within and relating to living organisms.",
      icon: "B",
      examples: ["Proteins & Enzymes", "Nucleic Acids", "Metabolism", "Molecular Genetics"],
      applications: ["Drug Discovery", "Genetic Engineering", "Nutritional Science"]
    },
    {
      title: "Environmental Chemistry",
      description: "The study of chemical processes occurring in the environment.",
      icon: "E",
      examples: ["Atmospheric Chemistry", "Aquatic Chemistry", "Soil Chemistry", "Pollution Analysis"],
      applications: ["Climate Science", "Remediation Techniques", "Sustainable Chemistry"]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 bg-gray-50">
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
            <p className="text-lg text-black max-w-3xl mx-auto">
              Chemistry is the scientific study of matter, its properties, and interactions with other matter and energy.
              Explore the various branches of chemistry and dive into specialized topics within each field.
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
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-4">Chemistry Learning Path</h2>
            <p className="text-black mb-6">
              Start your chemistry learning journey with our structured curriculum. Our learning path takes you from fundamental 
              principles to advanced topics, with hands-on experiments and interactive simulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center border-b-4 border-[rgb(37,108,250)]">
                <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">1</div>
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Fundamentals</h3>
                <p className="text-black text-sm">Atomic Structure, Periodic Table, Chemical Bonding</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center border-b-4 border-[rgb(37,108,250)]">
                <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">2</div>
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Core Concepts</h3>
                <p className="text-black text-sm">Chemical Reactions, Stoichiometry, Solutions</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center border-b-4 border-[rgb(37,108,250)]">
                <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">3</div>
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Specialized Areas</h3>
                <p className="text-black text-sm">Organic, Inorganic, Physical, and Analytical Chemistry</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center border-b-4 border-[rgb(37,108,250)]">
                <div className="w-12 h-12 bg-[rgb(37,108,250)] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">4</div>
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Applications</h3>
                <p className="text-black text-sm">Industrial Processes, Research Methods, Modern Techniques</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full hover:bg-blue-600 transition-colors">
                Begin Chemistry Learning Path
              </button>
            </div>
          </div>
          
          <div className="bg-[rgb(37,108,250)]/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-4">Featured Chemistry Resources</h2>
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
                <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Chemistry Video Library</h3>
                <p className="text-black mb-3 text-sm">Watch expert explanations and demonstrations of key chemistry concepts, from basic principles to advanced topics.</p>
                <button className="w-full py-2 bg-[rgb(37,108,250)] text-white rounded-md text-sm">Browse Videos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 