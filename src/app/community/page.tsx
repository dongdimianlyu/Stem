"use client";

import Link from 'next/link';
import { useState } from 'react';

interface Person {
  id: string;
  name: string;
  type: 'mentor' | 'student';
  age: number;
  major: string;
  location: string;
  interests: string[];
  bio: string;
  image: string;
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'mentors' | 'students'>('mentors');
  const [requestSent, setRequestSent] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const mentors: Person[] = [
    {
      id: 'm1',
      name: 'Dr. Ahmad Rahman',
      age: 35,
      type: 'mentor',
      major: 'Biotechnology',
      location: 'Penang',
      interests: ['Biotechnology', 'Sustainability', 'Research'],
      bio: 'PhD in Molecular Biology with 10 years of research experience. Currently leading a team developing sustainable biofuels from algae.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 'm2',
      name: 'Dr. Lim Wei Ming',
      age: 42,
      type: 'mentor',
      major: 'Engineering',
      location: 'Selangor',
      interests: ['Robotics', 'Automation', 'Entrepreneurship'],
      bio: 'Mechanical engineer with expertise in robotics and automation. Founded a tech startup focused on industrial automation solutions.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 'm3',
      name: 'Puan Nurul Huda',
      age: 38,
      type: 'mentor',
      major: 'Electrical Engineering',
      location: 'Kuala Lumpur',
      interests: ['Renewable Energy', 'Power Systems', 'Women in Engineering'],
      bio: 'Electrical engineer specializing in renewable energy systems. Working on large-scale solar implementation projects across Malaysia.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      id: 'm4',
      name: 'Dr. Rajesh Kumar',
      age: 45,
      type: 'mentor',
      major: 'Mathematics',
      location: 'Johor',
      interests: ['Data Science', 'Statistical Analysis', 'Mathematical Modeling'],
      bio: 'Professor of Applied Mathematics with research focus on statistical models for climate prediction and environmental data analysis.',
      image: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
  ];
  
  const students: Person[] = [
    {
      id: 's1',
      name: 'Sarah Chen',
      age: 17,
      type: 'student',
      major: 'Computer Science',
      location: 'Kuala Lumpur',
      interests: ['Artificial Intelligence', 'Web Development', 'Education Technology'],
      bio: 'Passionate about AI and machine learning. Currently working on a project to develop an AI-powered educational platform for underprivileged students.',
      image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      id: 's2',
      name: 'Priya Patel',
      age: 16,
      type: 'student',
      major: 'Physics',
      location: 'Johor Bahru',
      interests: ['Quantum Physics', 'Astrophysics', 'Mathematics'],
      bio: 'Fascinated by quantum mechanics and astrophysics. Won first place in the National Physics Olympiad last year.',
      image: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
      id: 's3',
      name: 'Tan Jun Wei',
      age: 18,
      type: 'student',
      major: 'Chemical Engineering',
      location: 'Penang',
      interests: ['Sustainable Materials', 'Green Chemistry', 'Bioplastics'],
      bio: 'Interested in developing eco-friendly materials. Working on a research project to create biodegradable plastics from agricultural waste.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
      id: 's4',
      name: 'Muhammad Hafiz',
      age: 17,
      type: 'student',
      major: 'Mechanical Engineering',
      location: 'Ipoh',
      interests: ['Robotics', 'Sustainable Engineering', 'Aerospace'],
      bio: 'Passionate about designing robots for environmental conservation. Built a prototype water quality monitoring robot for local rivers.',
      image: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
  ];
  
  const handleConnect = (personId: string) => {
    if (!requestSent.includes(personId)) {
      setRequestSent([...requestSent, personId]);
    }
  };

  // Filter people based on active tab and search query
  const filteredPeople = () => {
    let people = [];
    if (activeTab === 'all') people = [...mentors, ...students];
    else if (activeTab === 'mentors') people = mentors;
    else people = students;

    if (!searchQuery) return people;
    
    return people.filter(person => 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };
  
  return (
    <main className="min-h-screen bg-[#4C89F6] bg-gradient-to-b from-[#4C89F6] to-[#77BFB6] pt-20 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white text-center mb-8">STEM Community</h1>
        
        {/* Top Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex bg-[#75aaff] p-2 rounded-full">
            <button 
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
                activeTab === 'all' ? 'bg-white text-[#4C89F6] shadow-md' : 'text-white hover:bg-[#5695fb]'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button 
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
                activeTab === 'students' ? 'bg-white text-[#4C89F6] shadow-md' : 'text-white hover:bg-[#5695fb]'
              }`}
              onClick={() => setActiveTab('students')}
            >
              Students
            </button>
            <button 
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all ${
                activeTab === 'mentors' ? 'bg-[#FFfa61] text-[#4C89F6] border-2 border-white shadow-md' : 'text-white hover:bg-[#5695fb]'
              }`}
              onClick={() => setActiveTab('mentors')}
            >
              Mentors
            </button>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name, field, or location..."
                className="pl-4 pr-10 py-3 rounded-full w-full md:w-[400px] bg-[#75aaff] text-white placeholder-blue-200 border-2 border-blue-300 focus:outline-none focus:border-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPeople().map((person) => (
            <div key={person.id} className="bg-[#e1edff] bg-opacity-80 rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2c3e50]">{person.name}</h3>
                      <p className="text-[#5d6d7e]">{person.age} years old</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      person.type === 'mentor' 
                        ? 'bg-[#FFfa61] text-[#2c3e50]' 
                        : 'bg-[#4C89F6] text-white'
                    }`}>
                      {person.type === 'mentor' ? 'Mentor' : 'Student'}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <div className="mb-2">
                      <span className="font-semibold">Field:</span> {person.major}
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Location:</span> {person.location}
                    </div>
                    
                    <div className="mb-2">
                      <span className="font-semibold">Interests:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.interests.map((interest, index) => (
                        <span key={index} className="text-sm bg-[#a4c7fa] text-[#2c3e50] px-3 py-1 rounded-full">
                          {interest}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-[#2c3e50] mb-6">
                      {person.bio}
                    </p>
                    
                    <button 
                      className={`w-full py-3 rounded-full font-semibold ${
                        requestSent.includes(person.id)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-[#FFfa61] text-[#2c3e50] hover:bg-[#FFE02D] transition-colors'
                      }`}
                      onClick={() => handleConnect(person.id)}
                      disabled={requestSent.includes(person.id)}
                    >
                      {requestSent.includes(person.id) ? 'Request Sent' : 'Connect'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 