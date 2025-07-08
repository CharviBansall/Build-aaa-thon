export function getFrequencies(ideas) {
  const wordCounts = {};
  
  ideas.forEach(idea => {
    const words = idea
      .toLowerCase()
      .split(/\s+/)
      .filter(word => word.length >= 3 && /^[a-zA-Z]+$/.test(word)); // Filter words >= 3 chars and only letters
    
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  });
  
  return Object.entries(wordCounts).map(([text, value]) => ({
    text,
    value
  }));
} 