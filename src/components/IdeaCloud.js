import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import WordCloud from 'react-wordcloud';
import { getFrequencies } from '../utils/wordCloudHelpers';
import { IdeaInput } from './IdeaInput';
import './IdeaCloud.css';

const IdeaCloud = () => {
  const [ideas, setIdeas] = useState([]);

  // Load ideas from localStorage on component mount
  useEffect(() => {
    const savedIdeas = localStorage.getItem('projectIdeas');
    if (savedIdeas) {
      try {
        const parsedIdeas = JSON.parse(savedIdeas);
        setIdeas(parsedIdeas);
      } catch (error) {
        console.error('Error loading saved ideas:', error);
      }
    }
  }, []);

  // Save ideas to localStorage whenever ideas change
  useEffect(() => {
    if (ideas.length > 0) {
      localStorage.setItem('projectIdeas', JSON.stringify(ideas));
    }
  }, [ideas]);

  const handleAddIdea = useCallback((idea) => {
    setIdeas(prev => [...prev, idea]);
  }, []);

  const words = getFrequencies(ideas);

  const cloudOptions = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [20, 60],
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    padding: 5,
    spiral: 'archimedean',
    scale: 'sqrt',
    deterministic: true,
    tooltip: {
      enabled: false
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -5,
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="idea-cloud-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Input Section - Now at the top */}
      <motion.div 
        className="idea-input-wrapper"
        variants={hoverVariants}
        whileHover="hover"
      >
        <IdeaInput onAdd={handleAddIdea} />
      </motion.div>

      {/* Word Cloud Section */}
      <motion.div 
        className="cloud-section"
        variants={hoverVariants}
        whileHover="hover"
      >
        <div className="wordcloud-wrapper">
          {words.length > 0 ? (
            <WordCloud 
              words={words} 
              options={cloudOptions}
            />
          ) : (
            <div className="empty-cloud-message">
              <p>✨ Add your first idea above to see the word cloud come to life!</p>
            </div>
          )}
        </div>
      </motion.div>

      {ideas.length > 0 && (
        <motion.div 
          className="ideas-list"
          variants={hoverVariants}
          whileHover="hover"
        >
          <h4>Your Ideas ({ideas.length}):</h4>
          <div className="ideas-grid">
            {ideas.map((idea, index) => (
              <motion.div 
                key={index} 
                className="idea-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {idea}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IdeaCloud; 