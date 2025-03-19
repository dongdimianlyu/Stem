"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Define the message type for our chat
interface Message {
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

// Define career field type for structured data
interface CareerField {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Define career path type
interface CareerPath {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  educationPath: string[];
  salaryRange: string;
  growthProspect: string;
  malaysiaOpportunities: string;
}

export default function CounselorPage() {
  // State for the current input message
  const [inputMessage, setInputMessage] = useState('');
  
  // State for career interests
  const [careerInterests, setCareerInterests] = useState('');
  
  // State for education background
  const [educationBackground, setEducationBackground] = useState('');
  
  // State for skills and strengths
  const [skillsAndStrengths, setSkillsAndStrengths] = useState('');

  // Additional state for specific questions
  const [specificQuestions, setSpecificQuestions] = useState('');

  // State for active tab
  const [activeTab, setActiveTab] = useState('chat');
  
  // State for all messages in the conversation
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      content: 'Hello! I\'m your AI STEM Career Counselor. I can help you explore career paths in Science, Technology, Engineering, and Mathematics based on your interests and background. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  
  // State for loading (simulating API call)
  const [isLoading, setIsLoading] = useState(false);
  
  // Reference to scroll to bottom of messages
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // STEM career fields for visual display
  const careerFields: CareerField[] = [
    {
      id: 'science',
      name: 'Science',
      icon: '🧪',
      description: 'Biology, Chemistry, Physics, Earth Sciences'
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: '💻',
      description: 'Computer Science, IT, Data Science, Cybersecurity'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: '⚙️',
      description: 'Civil, Mechanical, Electrical, Chemical Engineering'
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '📊',
      description: 'Statistics, Actuarial Science, Finance, Cryptography'
    }
  ];
  
  // Predefined responses for demonstration
  const aiResponses = [
    {
      keywords: ["data", "science", "analyst", "machine learning"],
      response: "Based on your interest in data science, I recommend exploring careers such as Data Scientist, Data Analyst, or Machine Learning Engineer. In Malaysia, the tech industry is growing rapidly with companies like PETRONAS, Axiata, and multinational tech firms hiring data professionals. The average salary range is RM 84,000 - RM 120,000 annually. Would you like specific information about educational pathways to enter this field?"
    },
    {
      keywords: ["biology", "medicine", "medical", "biochemistry", "life science"],
      response: "Your interest in biology and life sciences could lead to promising careers such as Biomedical Researcher, Biochemist, or Biotechnology Specialist. Malaysia's healthcare and biotech sectors are expanding, with research institutes like Malaysia Genome Institute offering opportunities. Consider programs at universities like Universiti Malaya or Universiti Sains Malaysia that offer specialized courses in these fields. Would you like to know more about specific biotech opportunities in Malaysia?"
    },
    {
      keywords: ["engineer", "engineering", "mechanical", "civil", "electrical"],
      response: "Engineering is an excellent choice in Malaysia's developing infrastructure. Civil, Mechanical, and Electrical Engineers are in high demand with the country's focus on infrastructure development. Companies like Gamuda, IJM Corporation, and government projects often recruit engineers. Malaysian engineering graduates can expect starting salaries between RM 48,000 - RM 75,000, with significant growth potential. Would you like information about engineering specializations that match your interests?"
    },
    {
      keywords: ["mathematics", "statistics", "actuary", "financial"],
      response: "With your mathematics background, consider careers like Actuary, Statistician, or Financial Analyst. These professions are well-compensated in Malaysia's financial sector. Banks, insurance companies, and investment firms seek professionals with strong quantitative skills. Actuaries in particular are in high demand, with relatively few qualified professionals in the Malaysian market. Would you like me to recommend specific companies that are currently recruiting in these fields?"
    },
    {
      keywords: ["scholarship", "funding", "financial aid", "study abroad"],
      response: "For STEM scholarships in Malaysia, look into government options like the JPA Scholarship, MARA Scholarship, and Yayasan Khazanah. Corporate scholarships from Petronas, Shell, and Sime Darby are also excellent. For studying abroad, consider the Malaysia International Scholarship (MIS) for postgraduate studies. Application deadlines typically fall between February and April each year. Would you like more specific information about eligibility requirements?"
    },
    {
      keywords: ["internship", "practical training", "work experience", "industry"],
      response: "For STEM internships in Malaysia, major companies like Intel, Petronas, and Grab offer structured programs. Government research institutions like MIMOS and the Malaysian Nuclear Agency also provide valuable experience. Most internships run for 3-6 months and applications should be submitted 3-4 months in advance. University career centers often have exclusive partnerships with companies. Would you like tips on creating a competitive application?"
    }
  ];
  
  // Additional state for skills assessment
  const [skillsAssessment, setSkillsAssessment] = useState<{[key: string]: number}>({
    technical: 3,
    analytical: 3,
    communication: 3,
    creativity: 3,
    leadership: 3,
  });

  // Additional state for industry preference
  const [industryPreference, setIndustryPreference] = useState('');

  // Additional state for work style preference
  const [workStylePreference, setWorkStylePreference] = useState('');

  // Additional state for selected career path
  const [selectedCareerPath, setSelectedCareerPath] = useState<CareerPath | null>(null);

  // Function to simulate sending a message
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      sender: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Generate AI response based on user input or use default
      let responseText = "Thank you for sharing that information. Based on what you've told me, I would recommend exploring careers that combine your interests and strengths. Would you like more specific advice about educational pathways, job opportunities in Malaysia, or salary expectations for particular STEM fields?";
      
      // Check for keyword matches in predefined responses
      const userInput = inputMessage.toLowerCase() + ' ' + careerInterests.toLowerCase() + ' ' + skillsAndStrengths.toLowerCase();
      
      for (const response of aiResponses) {
        if (response.keywords.some(keyword => userInput.includes(keyword))) {
          responseText = response.response;
          break;
        }
      }
      
      // Add context-specific information if fields are filled
      if (careerInterests && educationBackground && skillsAndStrengths) {
        responseText = `Based on your interest in ${careerInterests}, your ${educationBackground} background, and your strengths in ${skillsAndStrengths}, I would recommend exploring the following career paths in Malaysia:\n\n1. ${getRandomCareerRecommendation()}\n2. ${getRandomCareerRecommendation()}\n3. ${getRandomCareerRecommendation()}\n\nWould you like more specific information about any of these career paths?`;
      }
      
      const aiMessage: Message = {
        sender: 'ai',
        content: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  // Function to get a random career recommendation
  const getRandomCareerRecommendation = () => {
    const careers = [
      "Data Scientist (Average Salary: RM 84,000 - RM 120,000)",
      "Biomedical Engineer (Average Salary: RM 60,000 - RM 95,000)",
      "Environmental Scientist (Average Salary: RM 48,000 - RM 85,000)",
      "AI/ML Engineer (Average Salary: RM 90,000 - RM 130,000)",
      "Renewable Energy Engineer (Average Salary: RM 72,000 - RM 108,000)",
      "Statistician (Average Salary: RM 60,000 - RM 90,000)",
      "Cybersecurity Specialist (Average Salary: RM 78,000 - RM 120,000)",
      "Biotechnology Researcher (Average Salary: RM 72,000 - RM 96,000)"
    ];
    
    return careers[Math.floor(Math.random() * careers.length)];
  };
  
  // Function to handle skill level change
  const handleSkillLevelChange = (skill: string, level: number) => {
    setSkillsAssessment(prev => ({
      ...prev,
      [skill]: level
    }));
  };

  // Function to suggest career paths based on input
  const suggestCareerPaths = () => {
    // This would be more sophisticated in a real app
    // For demo, just returning a random career path
    const randomIndex = Math.floor(Math.random() * careerPaths.length);
    return setSelectedCareerPath(careerPaths[randomIndex]);
  };

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create message from form data
    const formMessage = `I'm interested in ${careerInterests}. My educational background is ${educationBackground}, and my skills include ${skillsAndStrengths}.${specificQuestions ? ` I'd like to know: ${specificQuestions}` : ''}`;
    
    // Suggest a career path based on the form input
    suggestCareerPaths();
    
    setInputMessage(formMessage);
    setActiveTab('chat'); // Switch to chat tab after submitting form
    handleSendMessage();
  };
  
  // Function to handle quick question selection
  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setActiveTab('chat'); // Switch to chat tab after selecting a question
    handleSendMessage();
  };
  
  // Scroll to bottom of chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Sample career paths
  const careerPaths: CareerPath[] = [
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'As a Data Scientist, you\'ll analyze complex data to help organizations make better decisions. You\'ll use statistics, machine learning, and programming to extract insights from large datasets.',
      requiredSkills: ['Python/R Programming', 'Statistical Analysis', 'Machine Learning', 'Data Visualization', 'SQL'],
      educationPath: [
        'Bachelor\'s in Computer Science, Statistics, or related field',
        'Master\'s or PhD for advanced positions',
        'Specialized certifications: Microsoft Azure Data Scientist, AWS Certified Data Analytics'
      ],
      salaryRange: 'RM 84,000 - RM 120,000 annually',
      growthProspect: 'Very high growth (15-20% annually)',
      malaysiaOpportunities: 'Major banks, telecommunications companies, and tech firms like PETRONAS, Axiata, and multinationals with analytics divisions in Malaysia.'
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      description: 'Software Engineers design, develop and maintain software systems. You\'ll write code, test applications, and collaborate with cross-functional teams to create technology solutions.',
      requiredSkills: ['Programming Languages', 'Software Development Methodologies', 'Version Control', 'Testing', 'Problem Solving'],
      educationPath: [
        'Bachelor\'s in Computer Science or Software Engineering',
        'Coding bootcamps for entry-level positions',
        'Professional certifications in specialized areas'
      ],
      salaryRange: 'RM 60,000 - RM 120,000 annually',
      growthProspect: 'Strong growth (8-10% annually)',
      malaysiaOpportunities: 'Tech companies, banks, e-commerce platforms, and multinational corporations with development centers in Malaysia.'
    },
    {
      id: 'biomedical-engineer',
      title: 'Biomedical Engineer',
      description: 'Biomedical Engineers combine engineering principles with medical sciences to design and create equipment, devices, and software used in healthcare. This field bridges engineering and medicine.',
      requiredSkills: ['Engineering Fundamentals', 'Medical Knowledge', 'CAD Design', 'Problem Solving', 'Regulatory Compliance'],
      educationPath: [
        'Bachelor\'s in Biomedical Engineering or related field',
        'Master\'s for specialized roles',
        'Professional engineering license'
      ],
      salaryRange: 'RM 60,000 - RM 95,000 annually',
      growthProspect: 'Moderate to high growth (7-10% annually)',
      malaysiaOpportunities: 'Hospitals, medical device manufacturers, research institutions, and healthcare technology companies.'
    }
  ];
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[rgb(37,108,250)] mb-4">AI STEM Career Counselor</h1>
              <div className="bg-[rgb(255,250,97)] h-1 w-32 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
                Get personalized guidance on STEM careers, educational pathways, and opportunities in Malaysia.
              </p>
            </div>
            
            {/* STEM Fields Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {careerFields.map((field) => (
                <div 
                  key={field.id}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-[rgb(37,108,250)]"
                >
                  <span className="text-4xl mb-3 inline-block">{field.icon}</span>
                  <h3 className="text-xl font-bold text-[rgb(37,108,250)] mb-2">{field.name}</h3>
                  <p className="text-black text-sm">{field.description}</p>
                </div>
              ))}
            </div>
            
            {/* Main Interface Tabs */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 border border-gray-100">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button 
                  className={`flex-1 py-4 px-6 text-center font-semibold text-lg ${
                    activeTab === 'chat' 
                      ? 'bg-[rgb(37,108,250)] text-white' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('chat')}
                >
                  Chat with AI Counselor
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center font-semibold text-lg ${
                    activeTab === 'profile' 
                      ? 'bg-[rgb(37,108,250)] text-white' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  Your Career Profile
                </button>
                <button 
                  className={`flex-1 py-4 px-6 text-center font-semibold text-lg ${
                    activeTab === 'faq' 
                      ? 'bg-[rgb(37,108,250)] text-white' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('faq')}
                >
                  FAQ & Resources
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="p-0">
                {/* Chat Interface */}
                {activeTab === 'chat' && (
                  <div>
                    {/* Quick Questions */}
                    <div className="p-4 bg-blue-50 border-b border-blue-100">
                      <h3 className="font-semibold text-[rgb(37,108,250)] mb-2">Quick Questions:</h3>
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => handleQuickQuestion("What are the highest paying STEM jobs in Malaysia?")}
                          className="px-3 py-2 bg-white hover:bg-[rgb(37,108,250)] hover:text-white text-black text-sm font-medium rounded-full border border-blue-200 transition-colors"
                        >
                          Highest paying STEM jobs
                        </button>
                        <button 
                          onClick={() => handleQuickQuestion("What scholarships are available for STEM students in Malaysia?")}
                          className="px-3 py-2 bg-white hover:bg-[rgb(37,108,250)] hover:text-white text-black text-sm font-medium rounded-full border border-blue-200 transition-colors"
                        >
                          STEM scholarships
                        </button>
                        <button 
                          onClick={() => handleQuickQuestion("Which Malaysian universities are best for computer science?")}
                          className="px-3 py-2 bg-white hover:bg-[rgb(37,108,250)] hover:text-white text-black text-sm font-medium rounded-full border border-blue-200 transition-colors"
                        >
                          Top CS universities
                        </button>
                        <button 
                          onClick={() => handleQuickQuestion("What STEM internship opportunities are available in Malaysia?")}
                          className="px-3 py-2 bg-white hover:bg-[rgb(37,108,250)] hover:text-white text-black text-sm font-medium rounded-full border border-blue-200 transition-colors"
                        >
                          Internship opportunities
                        </button>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="h-[450px] overflow-y-auto p-6 bg-gray-50" style={{ scrollBehavior: 'smooth' }}>
                      {messages.map((message, index) => (
                        <div 
                          key={index} 
                          className={`mb-6 ${message.sender === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                        >
                          {message.sender === 'ai' && (
                            <div className="w-10 h-10 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                              AI
                            </div>
                          )}
                          
                          <div 
                            className={`rounded-2xl max-w-[80%] ${
                              message.sender === 'user' 
                                ? 'bg-[rgb(37,108,250)] text-white rounded-tr-none shadow-md' 
                                : 'bg-white border border-gray-200 text-black rounded-tl-none shadow-md'
                            }`}
                          >
                            <div className="p-4">
                              <p className="whitespace-pre-line text-base leading-relaxed">{message.content}</p>
                            </div>
                            <div className={`px-4 pb-2 text-xs ${message.sender === 'user' ? 'text-blue-200' : 'text-black'}`}>
                              {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                          </div>
                          
                          {message.sender === 'user' && (
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold ml-3 flex-shrink-0">
                              You
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center text-white font-bold mr-3">
                            AI
                          </div>
                          <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 shadow-sm inline-block">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>
                    
                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <div className="flex space-x-2">
                        <input 
                          type="text"
                          className="flex-1 p-4 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black"
                          placeholder="Ask about STEM careers, education, or opportunities..."
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button 
                          className="p-4 bg-[rgb(37,108,250)] text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-md flex items-center justify-center"
                          onClick={handleSendMessage}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Profile Form */}
                {activeTab === 'profile' && (
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Discover Your Ideal Career Path</h2>
                    
                    {selectedCareerPath ? (
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-bold text-[rgb(37,108,250)]">Suggested Career Path: {selectedCareerPath.title}</h3>
                          <button 
                            onClick={() => setSelectedCareerPath(null)}
                            className="text-sm text-[rgb(37,108,250)] hover:underline"
                          >
                            Reset
                          </button>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-md mb-6">
                          <p className="text-black mb-4">{selectedCareerPath.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="text-lg font-bold text-[rgb(37,108,250)] mb-3">Required Skills</h4>
                              <ul className="space-y-1">
                                {selectedCareerPath.requiredSkills.map((skill, index) => (
                                  <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-black">{skill}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-bold text-[rgb(37,108,250)] mb-3">Educational Pathway</h4>
                              <ul className="space-y-1">
                                {selectedCareerPath.educationPath.map((path, index) => (
                                  <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-black">{path}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-bold text-[rgb(37,108,250)] mb-2">Career Outlook</h4>
                              <p className="text-black mb-2"><span className="font-semibold">Salary Range:</span> {selectedCareerPath.salaryRange}</p>
                              <p className="text-black"><span className="font-semibold">Growth Prospect:</span> {selectedCareerPath.growthProspect}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-bold text-[rgb(37,108,250)] mb-2">Opportunities in Malaysia</h4>
                              <p className="text-black">{selectedCareerPath.malaysiaOpportunities}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <button 
                            onClick={() => setActiveTab('chat')}
                            className="px-8 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full hover:bg-blue-600 transition-colors mx-2"
                          >
                            Discuss With AI Counselor
                          </button>
                          
                          <button
                            onClick={() => {
                              const randomIndex = Math.floor(Math.random() * careerPaths.length);
                              setSelectedCareerPath(careerPaths[randomIndex]);
                            }}
                            className="px-8 py-3 bg-white border-2 border-[rgb(37,108,250)] text-[rgb(37,108,250)] font-bold rounded-full hover:bg-blue-50 transition-colors mx-2"
                          >
                            View Another Path
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <label htmlFor="career-interests" className="block text-[rgb(37,108,250)] font-bold mb-3 text-lg">
                              STEM Fields of Interest
                            </label>
                            <textarea 
                              id="career-interests"
                              className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black shadow-sm"
                              placeholder="e.g., Data Science, Biomedical Engineering, Environmental Science..."
                              rows={3}
                              value={careerInterests}
                              onChange={(e) => setCareerInterests(e.target.value)}
                            />
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <label htmlFor="education-background" className="block text-[rgb(37,108,250)] font-bold mb-3 text-lg">
                              Education Level
                            </label>
                            <textarea 
                              id="education-background"
                              className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black shadow-sm"
                              placeholder="e.g., SPM, Diploma, Bachelor's in Computer Science..."
                              rows={3}
                              value={educationBackground}
                              onChange={(e) => setEducationBackground(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <label htmlFor="skills-strengths" className="block text-[rgb(37,108,250)] font-bold mb-3 text-lg">
                              Skills & Strengths
                            </label>
                            <textarea 
                              id="skills-strengths"
                              className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black shadow-sm"
                              placeholder="e.g., Programming, problem-solving, mathematics..."
                              rows={3}
                              value={skillsAndStrengths}
                              onChange={(e) => setSkillsAndStrengths(e.target.value)}
                            />
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                            <label htmlFor="industry-preference" className="block text-[rgb(37,108,250)] font-bold mb-3 text-lg">
                              Industry Preference
                            </label>
                            <select
                              id="industry-preference"
                              className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black shadow-sm"
                              value={industryPreference}
                              onChange={(e) => setIndustryPreference(e.target.value)}
                            >
                              <option value="">Select an industry...</option>
                              <option value="healthcare">Healthcare & Life Sciences</option>
                              <option value="technology">Technology & Software</option>
                              <option value="energy">Energy & Environmental</option>
                              <option value="manufacturing">Manufacturing & Engineering</option>
                              <option value="finance">Finance & Banking</option>
                              <option value="education">Education & Research</option>
                              <option value="government">Government & Public Sector</option>
                            </select>
                          </div>
                        </div>
                        
                        {/* Skill Assessment Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                          <label className="block text-[rgb(37,108,250)] font-bold mb-3 text-lg">
                            Skills Assessment
                          </label>
                          <p className="text-black mb-4">Rate your skill level in each area from 1 (Basic) to 5 (Expert)</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <label className="block text-black mb-2">Technical Skills</label>
                                <div className="flex items-center">
                                  <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={skillsAssessment.technical} 
                                    onChange={(e) => handleSkillLevelChange('technical', parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="ml-2 text-[rgb(37,108,250)] font-bold w-6 text-center">{skillsAssessment.technical}</span>
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-black mb-2">Analytical Thinking</label>
                                <div className="flex items-center">
                                  <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={skillsAssessment.analytical} 
                                    onChange={(e) => handleSkillLevelChange('analytical', parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="ml-2 text-[rgb(37,108,250)] font-bold w-6 text-center">{skillsAssessment.analytical}</span>
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-black mb-2">Communication</label>
                                <div className="flex items-center">
                                  <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={skillsAssessment.communication} 
                                    onChange={(e) => handleSkillLevelChange('communication', parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="ml-2 text-[rgb(37,108,250)] font-bold w-6 text-center">{skillsAssessment.communication}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <label className="block text-black mb-2">Creativity</label>
                                <div className="flex items-center">
                                  <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={skillsAssessment.creativity} 
                                    onChange={(e) => handleSkillLevelChange('creativity', parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="ml-2 text-[rgb(37,108,250)] font-bold w-6 text-center">{skillsAssessment.creativity}</span>
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-black mb-2">Leadership</label>
                                <div className="flex items-center">
                                  <input 
                                    type="range" 
                                    min="1" 
                                    max="5" 
                                    value={skillsAssessment.leadership} 
                                    onChange={(e) => handleSkillLevelChange('leadership', parseInt(e.target.value))}
                                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                                  />
                                  <span className="ml-2 text-[rgb(37,108,250)] font-bold w-6 text-center">{skillsAssessment.leadership}</span>
                                </div>
                              </div>
                              
                              <div>
                                <label className="block text-black mb-2">Work Style Preference</label>
                                <select
                                  className="w-full p-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black"
                                  value={workStylePreference}
                                  onChange={(e) => setWorkStylePreference(e.target.value)}
                                >
                                  <option value="">Select a preference...</option>
                                  <option value="research">Research & Development</option>
                                  <option value="practical">Practical & Hands-on</option>
                                  <option value="analytical">Analytical & Data-driven</option>
                                  <option value="creative">Creative & Innovative</option>
                                  <option value="collaborative">Collaborative & Team-based</option>
                                  <option value="independent">Independent & Self-directed</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm">
                          <label htmlFor="specific-questions" className="block text-[rgb(37,108,250)] font-bold mb-3 text-lg">
                            Specific Questions (Optional)
                          </label>
                          <textarea 
                            id="specific-questions"
                            className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent text-black shadow-sm"
                            placeholder="e.g., Salary expectations? Required certifications?"
                            rows={3}
                            value={specificQuestions}
                            onChange={(e) => setSpecificQuestions(e.target.value)}
                          />
                        </div>
                        
                        <div className="text-center">
                          <button 
                            type="submit"
                            className="px-10 py-4 bg-[rgb(37,108,250)] text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-colors shadow-lg transform hover:scale-105 transition-transform"
                          >
                            Get Personalized Career Guidance
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
                
                {/* FAQ & Resources */}
                {activeTab === 'faq' && (
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">Frequently Asked Questions</h2>
                        
                        <div className="space-y-4">
                          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[rgb(37,108,250)]">
                            <h3 className="font-bold text-lg text-[rgb(37,108,250)] mb-2">What is the highest-paying STEM field in Malaysia?</h3>
                            <p className="text-black">Data Science and AI specialists typically earn the highest salaries among STEM professionals in Malaysia, with senior roles commanding RM 150,000+ annually.</p>
                          </div>
                          
                          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[rgb(37,108,250)]">
                            <h3 className="font-bold text-lg text-[rgb(37,108,250)] mb-2">How do I prepare for a STEM career?</h3>
                            <p className="text-black">Focus on strong fundamentals in mathematics and sciences, develop technical skills through projects, seek internships, and stay updated with industry developments through continuous learning.</p>
                          </div>
                          
                          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[rgb(37,108,250)]">
                            <h3 className="font-bold text-lg text-[rgb(37,108,250)] mb-2">Which STEM fields have the best job prospects?</h3>
                            <p className="text-black">In Malaysia, sectors with strong growth include Data Science, Cybersecurity, Renewable Energy Engineering, Biotechnology, and Artificial Intelligence.</p>
                          </div>
                          
                          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[rgb(37,108,250)]">
                            <h3 className="font-bold text-lg text-[rgb(37,108,250)] mb-2">Can I enter STEM fields without a specific degree?</h3>
                            <p className="text-black">Yes, many STEM careers are accessible through alternative pathways including professional certifications, coding bootcamps, and specialized training programs.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6">STEM in Malaysia</h2>
                        
                        <div className="bg-white p-6 rounded-xl shadow-md mb-6 border-t-4 border-[rgb(255,250,97)]">
                          <h3 className="font-bold text-lg text-[rgb(37,108,250)] mb-4">Key Statistics</h3>
                          <ul className="space-y-3">
                            <li className="flex items-center">
                              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[rgb(37,108,250)] font-bold mr-3">1</span>
                              <p className="text-black">Malaysia aims to produce 500,000 STEM graduates by 2030</p>
                            </li>
                            <li className="flex items-center">
                              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[rgb(37,108,250)] font-bold mr-3">2</span>
                              <p className="text-black">STEM professionals earn 20-30% higher salaries on average</p>
                            </li>
                            <li className="flex items-center">
                              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[rgb(37,108,250)] font-bold mr-3">3</span>
                              <p className="text-black">Tech industry jobs growing at 10% annually in Malaysia</p>
                            </li>
                            <li className="flex items-center">
                              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[rgb(37,108,250)] font-bold mr-3">4</span>
                              <p className="text-black">Over 90% of STEM graduates secure employment within 6 months</p>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[rgb(255,250,97)]">
                          <h3 className="font-bold text-lg text-[rgb(37,108,250)] mb-4">Useful Resources</h3>
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                              <p className="font-medium text-[rgb(37,108,250)]">Malaysia Digital Economy Corporation (MDEC)</p>
                              <p className="text-sm text-black">Digital skills training programs and career opportunities</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                              <p className="font-medium text-[rgb(37,108,250)]">TalentCorp Malaysia</p>
                              <p className="text-sm text-black">Scholarships, training, and career development for STEM professionals</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                              <p className="font-medium text-[rgb(37,108,250)]">Academy of Sciences Malaysia</p>
                              <p className="text-sm text-black">Research opportunities and scientific advancement programs</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                              <p className="font-medium text-[rgb(37,108,250)]">Malaysia Board of Technologists</p>
                              <p className="text-sm text-black">Professional certification and technology career pathways</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* How The Counselor Helps */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[rgb(255,250,97)] mb-10">
              <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-8 text-center">How Our AI Counselor Assists You</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">1</div>
                  <h3 className="text-xl font-bold mb-4 text-[rgb(37,108,250)] text-center">Career Exploration</h3>
                  <p className="text-black text-center">Discover detailed information about various STEM careers including qualifications, salaries, and job growth in Malaysia.</p>
                </div>
                
                <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">2</div>
                  <h3 className="text-xl font-bold mb-4 text-[rgb(37,108,250)] text-center">Educational Pathways</h3>
                  <p className="text-black text-center">Learn about educational requirements, universities, courses, and scholarship opportunities for your chosen field.</p>
                </div>
                
                <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">3</div>
                  <h3 className="text-xl font-bold mb-4 text-[rgb(37,108,250)] text-center">Personalized Advice</h3>
                  <p className="text-black text-center">Get tailored recommendations for books, courses, workshops, and organizations that can help you develop skills in your field.</p>
                </div>
              </div>
            </div>
            
            {/* Popular Questions */}
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-10">
              <h2 className="text-2xl font-bold text-[rgb(37,108,250)] mb-6 text-center">Popular STEM Career Questions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <button 
                  onClick={() => {
                    handleQuickQuestion("What skills will be most valuable for STEM careers in the next 5 years?");
                  }}
                  className="p-4 bg-blue-50 hover:bg-blue-100 text-left rounded-xl border border-blue-200 text-black transition-colors shadow-sm hover:shadow-md"
                >
                  <span className="block font-bold text-[rgb(37,108,250)] mb-1">Future Skills</span>
                  What skills will be most valuable in the next 5 years?
                </button>
                <button 
                  onClick={() => {
                    handleQuickQuestion("How can I transition into a STEM career if my background is non-STEM?");
                  }}
                  className="p-4 bg-blue-50 hover:bg-blue-100 text-left rounded-xl border border-blue-200 text-black transition-colors shadow-sm hover:shadow-md"
                >
                  <span className="block font-bold text-[rgb(37,108,250)] mb-1">Career Transition</span>
                  How can I transition from a non-STEM background?
                </button>
                <button 
                  onClick={() => {
                    handleQuickQuestion("What certification courses would boost my STEM career prospects?");
                  }}
                  className="p-4 bg-blue-50 hover:bg-blue-100 text-left rounded-xl border border-blue-200 text-black transition-colors shadow-sm hover:shadow-md"
                >
                  <span className="block font-bold text-[rgb(37,108,250)] mb-1">Certifications</span>
                  What certification courses boost career prospects?
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 