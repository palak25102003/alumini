import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEllipsisH } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const PostCard = ({ name, title, description }) => {
  return (
    <motion.div 
      className="bg-gray-200/80 rounded-lg p-4 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src="data:image/jpeg;base64,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" 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-xs text-gray-600">{title}</p>
          <p className="text-xs text-gray-600 mb-3">{description}</p>
          <div className="bg-gray-700 rounded-md w-full h-32"></div>
          <div className="flex justify-end mt-1">
            <button className="text-indigo-600 text-xs font-medium">More</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SuggestionCard = ({ name, title }) => {
  return (
    <motion.div 
      className="bg-indigo-500 rounded-lg p-3 mb-3"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
          <img 
            src="data:image/jpeg;base64,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" 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        <h4 className="text-white text-xs font-medium text-center">{name}</h4>
        <p className="text-white/80 text-xs text-center mb-2">{title}</p>
        <div className="bg-indigo-600 rounded-sm p-1">
          <FaLinkedin className="text-white text-xs" />
        </div>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const posts = [
    {
      id: 1,
      name: "Suyash Gupta",
      title: "Lead Product Designer at Product Designer | Design System Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse euismorbi odio varius odio..."
    },
    {
      id: 2,
      name: "Suyash Gupta",
      title: "Lead Product Designer at Product Designer | Design System Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse euismorbi odio varius odio..."
    },
    {
      id: 3,
      name: "Suyash Gupta",
      title: "Lead Product Designer at Product Designer | Design System Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse euismorbi odio varius odio..."
    },
    {
      id: 4,
      name: "Suyash Gupta",
      title: "Lead Product Designer at Product Designer | Design System Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse euismorbi odio varius odio..."
    },
    {
      id: 5,
      name: "Suyash Gupta",
      title: "Lead Product Designer at Product Designer | Design System Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse euismorbi odio varius odio..."
    }
  ];

  const suggestions = [
    { id: 1, name: "Anna Doe", title: "UX Designer" },
    { id: 2, name: "John Smith", title: "Product Manager" },
    { id: 3, name: "Mike Lee", title: "UI Designer" },
    { id: 4, name: "Emily Wong", title: "UX Researcher" },
    { id: 5, name: "Chris Evans", title: "Design Lead" },
    { id: 6, name: "Sarah Johnson", title: "Visual Designer" },
    { id: 7, name: "David Kim", title: "Product Designer" },
    { id: 8, name: "Lisa Chen", title: "UX Engineer" }
  ];

  return (
    <>
    <Header/>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column with posts */}
          <div className="md:col-span-2 space-y-1">
            {posts.map(post => (
              <PostCard 
                key={post.id} 
                name={post.name} 
                title={post.title} 
                description={post.description} 
              />
            ))}
          </div>
          
          {/* Right column with suggestions */}
          <div className="md:col-span-1">
            <motion.div 
              className="bg-gray-200/80 rounded-lg p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-indigo-800">Suggestions for you</h2>
                <div className="flex items-center gap-1">
                  <button className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400">
                    <span className="text-xs text-gray-600">←</span>
                  </button>
                  <button className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400">
                    <span className="text-xs text-gray-600">→</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {suggestions.map(suggestion => (
                  <SuggestionCard 
                    key={suggestion.id} 
                    name={suggestion.name} 
                    title={suggestion.title} 
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-4">
                <button className="bg-gray-300 text-gray-600 rounded-full px-4 py-1 text-xs">
                  More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
    
  );
};

export default Home;