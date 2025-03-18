"use client";

import { useState, useRef, useEffect } from 'react';

// Define the message type for our chat
interface Message {
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
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
  
  // State for all messages in the conversation
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      content: 'Hello! I\'m your AI STEM Career Counselor. I can help you explore career paths in Science, Technology, Engineering, and Mathematics based on your interests and background. Fill in the fields above to receive personalized guidance, or ask me a specific question!',
      timestamp: new Date()
    }
  ]);
  
  // State for loading (simulating API call)
  const [isLoading, setIsLoading] = useState(false);
  
  // Reference to scroll to bottom of messages
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
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
  
  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create message from form data
    const formMessage = `I'm interested in ${careerInterests}. My educational background is ${educationBackground}, and my skills include ${skillsAndStrengths}.${specificQuestions ? ` I'd like to know: ${specificQuestions}` : ''}`;
    
    setInputMessage(formMessage);
    handleSendMessage();
  };
  
  // Function to handle quick question selection
  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    handleSendMessage();
  };
  
  // Scroll to bottom of chat on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <main className="min-h-screen pt-20">
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-[rgb(37,108,250)] mb-4">AI STEM Career Counselor</h1>
              <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-black max-w-3xl mx-auto">
                Get personalized guidance on STEM careers, educational pathways, and opportunities in Malaysia.
              </p>
            </div>
            
            {/* Quick Questions Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-2 border-[rgb(37,108,250)]">
              <h2 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">Common Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  onClick={() => handleQuickQuestion("What are the highest paying STEM jobs in Malaysia?")}
                  className="p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                >
                  What are the highest paying STEM jobs in Malaysia?
                </button>
                <button 
                  onClick={() => handleQuickQuestion("What scholarships are available for STEM students in Malaysia?")}
                  className="p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                >
                  What scholarships are available for STEM students?
                </button>
                <button 
                  onClick={() => handleQuickQuestion("Which Malaysian universities are best for computer science?")}
                  className="p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                >
                  Which Malaysian universities are best for computer science?
                </button>
                <button 
                  onClick={() => handleQuickQuestion("What STEM internship opportunities are available in Malaysia?")}
                  className="p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                >
                  What STEM internship opportunities are available?
                </button>
              </div>
            </div>
            
            {/* Career Context Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-l-4 border-[rgb(37,108,250)]">
              <h2 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">Get Personalized Career Guidance</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <label htmlFor="career-interests" className="block text-[rgb(37,108,250)] font-medium mb-2">
                      STEM Fields of Interest
                    </label>
                    <textarea 
                      id="career-interests"
                      className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent"
                      placeholder="e.g., Data Science, Biomedical Engineering, Environmental Science..."
                      rows={2}
                      value={careerInterests}
                      onChange={(e) => setCareerInterests(e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <label htmlFor="education-background" className="block text-[rgb(37,108,250)] font-medium mb-2">
                      Education Level
                    </label>
                    <textarea 
                      id="education-background"
                      className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent"
                      placeholder="e.g., SPM, Diploma, Bachelor's in Computer Science..."
                      rows={2}
                      value={educationBackground}
                      onChange={(e) => setEducationBackground(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <label htmlFor="skills-strengths" className="block text-[rgb(37,108,250)] font-medium mb-2">
                      Skills & Strengths
                    </label>
                    <textarea 
                      id="skills-strengths"
                      className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent"
                      placeholder="e.g., Programming, problem-solving, mathematics..."
                      rows={2}
                      value={skillsAndStrengths}
                      onChange={(e) => setSkillsAndStrengths(e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <label htmlFor="specific-questions" className="block text-[rgb(37,108,250)] font-medium mb-2">
                      Specific Questions (Optional)
                    </label>
                    <textarea 
                      id="specific-questions"
                      className="w-full p-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent"
                      placeholder="e.g., Salary expectations? Required certifications?"
                      rows={2}
                      value={specificQuestions}
                      onChange={(e) => setSpecificQuestions(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-[rgb(37,108,250)] text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-md"
                  >
                    Get Personalized Advice
                  </button>
                </div>
              </form>
            </div>
            
            {/* Chat Interface */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-[rgb(37,108,250)] p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">AI Counselor Chat</h2>
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-white text-sm">Online</span>
                </div>
              </div>
              
              {/* Messages Display */}
              <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                  >
                    <div 
                      className={`inline-block p-4 rounded-lg max-w-[80%] ${
                        message.sender === 'user' 
                          ? 'bg-[rgb(37,108,250)] text-white' 
                          : 'bg-white border border-gray-200 text-black shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex items-center text-gray-500 mb-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-1 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-1 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex space-x-2">
                  <input 
                    type="text"
                    className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(37,108,250)] focus:border-transparent"
                    placeholder="Ask a specific question about STEM careers..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button 
                    className="px-4 py-2 bg-[rgb(37,108,250)] text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={handleSendMessage}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border-t-4 border-[rgb(255,250,97)]">
              <h2 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">How Our AI Counselor Helps</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mb-3 text-white font-bold">1</div>
                  <h3 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Career Information</h3>
                  <p className="text-black">Get detailed information about various STEM careers including qualifications, salaries, and job growth in Malaysia.</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mb-3 text-white font-bold">2</div>
                  <h3 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Educational Guidance</h3>
                  <p className="text-black">Learn about educational requirements, universities, courses, and scholarship opportunities in your chosen field.</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mb-3 text-white font-bold">3</div>
                  <h3 className="text-lg font-semibold mb-2 text-[rgb(37,108,250)]">Personalized Resources</h3>
                  <p className="text-black">Get recommendations for books, courses, workshops, and organizations that can help you develop skills in your field.</p>
                </div>
              </div>
            </div>
            
            {/* FAQ and Quick Stats Section */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">STEM in Malaysia: Quick Facts</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[rgb(37,108,250)] mr-2">•</span>
                    <p className="text-black">Malaysia aims to produce 500,000 STEM graduates by 2030</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(37,108,250)] mr-2">•</span>
                    <p className="text-black">STEM professionals earn 20-30% higher salaries on average</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(37,108,250)] mr-2">•</span>
                    <p className="text-black">Tech industry jobs growing at 10% annually in Malaysia</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(37,108,250)] mr-2">•</span>
                    <p className="text-black">Over 90% of STEM graduates secure employment within 6 months</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-[rgb(37,108,250)] mb-4">Popular STEM Career Questions</h2>
                <div className="space-y-3">
                  <button 
                    onClick={() => handleQuickQuestion("What skills will be most valuable for STEM careers in the next 5 years?")}
                    className="w-full p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                  >
                    What skills will be most valuable in the next 5 years?
                  </button>
                  <button 
                    onClick={() => handleQuickQuestion("How can I transition into a STEM career if my background is non-STEM?")}
                    className="w-full p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                  >
                    How can I transition from a non-STEM background?
                  </button>
                  <button 
                    onClick={() => handleQuickQuestion("What certification courses would boost my STEM career prospects?")}
                    className="w-full p-3 bg-blue-50 hover:bg-blue-100 text-left rounded-lg border border-blue-200 text-black transition-colors"
                  >
                    What certification courses boost career prospects?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 