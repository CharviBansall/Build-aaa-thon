import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut" 
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="feature-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
    >
      <motion.div 
        className="feature-card-content"
        variants={hoverVariants}
        whileHover="hover"
      >
        <motion.div 
          className="feature-icon"
          variants={iconVariants}
          whileHover="hover"
        >
          {icon}
        </motion.div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard; 