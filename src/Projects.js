import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import IdeaCloud from './components/IdeaCloud';
import FeatureCard from './components/FeatureCard';
import Aurora from './components/Aurora';
import './Projects.css';

function Projects() {
  const features = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems that solve real-world problems through advanced machine learning algorithms and neural networks.'
    },
    {
      icon: '⛓️',
      title: 'Blockchain & Web3',
      description: 'Create decentralized applications and financial tools for the next generation of the internet and digital economy.'
    },
    {
      icon: '📱',
      title: 'Mobile & Web Apps',
      description: 'Craft beautiful, user-friendly applications that connect people and simplify daily tasks across all platforms.'
    },
    {
      icon: '🛠️',
      title: 'Developer Tools',
      description: 'Build powerful tools and platforms that empower other developers to create amazing things faster and more efficiently.'
    },
    {
      icon: '🎨',
      title: 'Creative Technology',
      description: 'Merge technology with creativity to build immersive experiences, digital art platforms, and interactive media.'
    },
    {
      icon: '🚀',
      title: 'Startups & MVPs',
      description: 'Rapid prototyping and building minimum viable products to test innovative ideas and launch successful startups.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="projects-page">
      {/* Full-screen Aurora background overlay */}
      <div className="fullscreen-background">
        <Aurora
          colorStops={["#6366F1", "#EF4444", "#EC4899", "#3B82F6"]}
          blend={0.2}
          amplitude={0.8}
          speed={0.3}
        />
      </div>

      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.header 
          className="projects-header"
          variants={headerVariants}
        >
          <div className="header-top">
            <Link to="/" className="back-to-home">← Back to Home</Link>
          </div>
          <h1 className="projects-main-title">Project Explorer</h1>
          <p className="projects-subtitle">
            Discover innovative project categories and visualize ideas through our interactive word cloud
          </p>
        </motion.header>

        {/* Word Cloud Section */}
        <section className="wordcloud-section">
          <IdeaCloud />
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <motion.h2 
            className="section-title"
            variants={headerVariants}
          >
            Project Categories
          </motion.h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

      </motion.div>
    </div>
  );
}

export default Projects; 