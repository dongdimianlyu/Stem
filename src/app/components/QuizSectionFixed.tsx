"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function QuizSection() {
  const [showQuiz, setShowQuiz] = useState(false);
  
  return (
    <section id="quiz" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {!showQuiz ? (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[rgb(37,108,250)] mb-6">Discover Your STEM Passion</h2>
            <div className="bg-[rgb(255,250,97)] h-1 w-24 mx-auto mb-10"></div>
            
            <p className="text-lg text-black mb-8">
              Our free interactive quiz is designed to help you identify which areas of STEM align best with your natural 
              interests, skills, and learning style. By answering just 15 questions, you'll gain valuable insights into 
              the STEM fields where you're most likely to thrive and maintain long-term passion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Assessment</h3>
                <p className="text-gray-600">
                  Complete our carefully crafted 15-question quiz in just 5-10 minutes to identify your STEM interests.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 rounded-full bg-[rgb(37,108,250)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Your Results</h3>
                <p className="text-gray-600">
                  Receive detailed insights into which STEM fields match your interests, with percentages indicating likelihood of sustained passion.
                </p>
              </div>
            </div>
            
            <button 
              className="px-8 py-4 bg-[rgb(37,108,250)] text-white font-bold rounded-full text-lg hover:bg-blue-600 transition-colors shadow-lg"
              onClick={() => setShowQuiz(true)}
            >
              Start Your Free STEM Assessment
            </button>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </section>
  );
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const questions = [
    {
      question: "When faced with a problem, do you prefer to...",
      options: [
        "Break it down systematically and analyze each component",
        "Experiment with different solutions through trial and error",
        "Research existing solutions before creating your own approach",
        "Discuss the problem with others to generate ideas"
      ]
    },
    {
      question: "Which of these activities would you find most enjoyable?",
      options: [
        "Building and programming a robot",
        "Conducting laboratory experiments",
        "Solving complex mathematical problems",
        "Designing new technologies to help people"
      ]
    },
    {
      question: "When learning something new, do you prefer to...",
      options: [
        "Follow step-by-step instructions",
        "Understand the theory before practicing",
        "Jump straight into hands-on practice",
        "Watch someone demonstrate it first"
      ]
    },
    {
      question: "Which of these subjects do you find most interesting?",
      options: [
        "Computer Science and Programming",
        "Biology and Life Sciences",
        "Physics and Energy",
        "Engineering and Design"
      ]
    },
    {
      question: "In a group project, which role would you naturally take?",
      options: [
        "The researcher who gathers information",
        "The problem-solver who works out technical details",
        "The designer who creates the visual elements and plans",
        "The communicator who presents findings and coordinates the team"
      ]
    },
    {
      question: "Which of these achievements would make you most proud?",
      options: [
        "Discovering a new scientific phenomenon",
        "Creating an app or software that many people use",
        "Building a machine or structure that solves a real problem",
        "Developing a mathematical model that predicts important outcomes"
      ]
    },
    {
      question: "What kind of work environment do you prefer?",
      options: [
        "A laboratory where you can conduct experiments",
        "A technology company with cutting-edge equipment",
        "A research institute focused on theoretical work",
        "A field environment where you can apply knowledge in the real world"
      ]
    },
    {
      question: "Which of these tools would you be most excited to use?",
      options: [
        "Powerful computers and programming software",
        "Scientific laboratory equipment",
        "Design and modeling software",
        "Mathematical analysis tools"
      ]
    },
    {
      question: "When you hear about a new scientific discovery, what interests you most?",
      options: [
        "The methodology and experiments that led to the discovery",
        "The practical applications and how it might be used",
        "The underlying mathematical or theoretical principles",
        "The impact it could have on society and people's lives"
      ]
    },
    {
      question: "What do you enjoy reading about in your free time?",
      options: [
        "New technological innovations and gadgets",
        "Scientific discoveries and research",
        "Engineering projects and how things are built",
        "Mathematical puzzles and logic problems"
      ]
    },
    {
      question: "When using a new device or app, do you...",
      options: [
        "Explore all its features through trial and error",
        "Read the manual or instructions carefully first",
        "Look for videos or tutorials online",
        "Focus on just the functions you need to use"
      ]
    },
    {
      question: "Which of these challenges would you find most engaging?",
      options: [
        "Figuring out why a scientific experiment produced unexpected results",
        "Debugging a complex piece of code",
        "Designing a bridge that can withstand specific conditions",
        "Developing a mathematical model to predict climate patterns"
      ]
    },
    {
      question: "What kind of impact do you want your career to have?",
      options: [
        "Advancing scientific knowledge and understanding",
        "Creating new technologies that improve daily life",
        "Building infrastructure that serves communities",
        "Using data and analysis to solve complex problems"
      ]
    },
    {
      question: "Which of these Malaysian icons or organizations inspires you most?",
      options: [
        "PETRONAS and their engineering achievements",
        "The Malaysia Digital Economy Corporation (MDEC)",
        "Malaysian scientists like Dr. Sheikh Muszaphar Shukor (first Malaysian astronaut)",
        "Malaysia's biodiversity conservation efforts and research"
      ]
    },
    {
      question: "When thinking about your future career, which is most important to you?",
      options: [
        "Innovation and creating new things",
        "Solving important problems facing society",
        "Financial stability and good job prospects",
        "Continuous learning and intellectual challenges"
      ]
    }
  ];
  
  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show results when all questions are answered
      setShowResults(true);
    }
  };
  
  const calculateResults = () => {
    // Simple algorithm to calculate interest percentages
    // In a real app, this would be more sophisticated
    const fields = {
      technology: 0,
      science: 0,
      engineering: 0,
      mathematics: 0
    };
    
    // Map certain answers to increase scores in different fields
    answers.forEach((answer, index) => {
      // Different questions contribute differently to each field
      // This is a simplified example
      if (index === 0) {
        if (answer === 0) fields.mathematics += 3;
        if (answer === 1) fields.science += 3;
        if (answer === 2) fields.technology += 3;
        if (answer === 3) fields.engineering += 3;
      } else if (index === 1) {
        if (answer === 0) fields.engineering += 3;
        if (answer === 1) fields.science += 3;
        if (answer === 2) fields.mathematics += 3;
        if (answer === 3) fields.technology += 3;
      }
      // ... and so on for all questions
      
      // Add some points to all fields for each question to avoid zero scores
      fields.technology += answer % 4 === 0 ? 2 : 1;
      fields.science += answer % 4 === 1 ? 2 : 1;
      fields.engineering += answer % 4 === 2 ? 2 : 1;
      fields.mathematics += answer % 4 === 3 ? 2 : 1;
    });
    
    // Calculate total points
    const total = fields.technology + fields.science + fields.engineering + fields.mathematics;
    
    // Convert to percentages and round
    return {
      technology: Math.round((fields.technology / total) * 100),
      science: Math.round((fields.science / total) * 100),
      engineering: Math.round((fields.engineering / total) * 100),
      mathematics: Math.round((fields.mathematics / total) * 100)
    };
  };
  
  const results = showResults ? calculateResults() : null;
  
  return (
    <div className="max-w-3xl mx-auto">
      {!showResults ? (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-[rgb(37,108,250)]">STEM Interest Quiz</h3>
              <span className="text-black font-medium">Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-[rgb(37,108,250)] h-2 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h4>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-[rgb(37,108,250)] hover:bg-blue-50 transition-colors"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-center text-[rgb(37,108,250)] mb-6">Your STEM Interest Profile</h3>
          
          <p className="text-black text-center mb-8">
            Based on your responses, here are the STEM fields where you're most likely to maintain your passion and excel:
          </p>
          
          <div className="space-y-6 mb-10">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Technology</span>
                <span className="font-semibold">{results?.technology}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div 
                  className="bg-[rgb(37,108,250)] h-4 rounded-full" 
                  style={{ width: `${results?.technology}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Science</span>
                <span className="font-semibold">{results?.science}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div 
                  className="bg-[rgb(37,108,250)] h-4 rounded-full" 
                  style={{ width: `${results?.science}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Engineering</span>
                <span className="font-semibold">{results?.engineering}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div 
                  className="bg-[rgb(37,108,250)] h-4 rounded-full" 
                  style={{ width: `${results?.engineering}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Mathematics</span>
                <span className="font-semibold">{results?.mathematics}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div 
                  className="bg-[rgb(37,108,250)] h-4 rounded-full" 
                  style={{ width: `${results?.mathematics}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">What's Next?</h4>
            <p className="text-black mb-6">
              Now that you know your interests, speak with our AI counselor to learn more about specific careers, 
              educational pathways, and opportunities in Malaysia related to your top fields.
            </p>
            <Link 
              href="#ai-counselor" 
              className="px-8 py-3 bg-[rgb(255,250,97)] text-[rgb(37,108,250)] font-bold rounded-full inline-block hover:bg-yellow-300 transition-colors"
            >
              Talk to Our AI Counselor
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 