import React, { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import classes from './index.module.css';

const aiTidbits = [
  "The term 'Artificial Intelligence' was coined at a conference at Dartmouth College in 1956.",
  "AI can predict heart attacks faster than doctors by analyzing medical data.",
  "The first self-driving car was created in the 1980s, paving the way for today's autonomous vehicles.",
  "Machine learning is a subset of AI that enables computers to learn from data without explicit programming.",
  "AI defeated a world champion in the game of Go, a complex strategy game, in 2016.",
  "Chatbots powered by AI handle over 85% of customer service interactions online.",
  "Deep learning algorithms are inspired by the structure and function of the human brain.",
  "AI is used to compose music, write poetry, and even create visual art.",
  "Virtual assistants like Siri and Alexa rely on AI to understand and respond to voice commands.",
  "AI helps farmers increase crop yields by analyzing soil and weather data.",
  "In healthcare, AI aids in early detection of diseases like cancer through image analysis.",
  "The global AI market is expected to reach over \$190 billion by 2025.",
  "AI can translate languages in real-time, breaking down communication barriers worldwide.",
  "Smart homes use AI to learn residents' habits and optimize energy usage.",
  "AI algorithms help detect fraudulent activities in banking and finance sectors.",
  "The concept of robots dates back to ancient Greek myths about mechanical beings.",
  "AI is crucial in space exploration, assisting with navigation and data analysis.",
  "Recommender systems on platforms like Netflix and Amazon use AI to suggest content you might like.",
  "Facial recognition technology, powered by AI, is used for security and unlocking devices.",
  "AI-driven personalization enhances user experience by tailoring content to individual preferences."
];

const AITidbits = () => {
  const [currentTidbit, setCurrentTidbit] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [userQuote, setUserQuote] = useState('');

  useEffect(() => {
    getRandomTidbit();
  }, []);

  const getRandomTidbit = () => {
    const randomIndex = Math.floor(Math.random() * aiTidbits.length);
    setCurrentTidbit(aiTidbits[randomIndex]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted quote:", userQuote);
    setUserQuote('');
    setShowForm(false);
    alert("Thank you for your submission!");
  };

  return (
    <div className={classes.aiTidbits}>
      <h2 style={{color:"white"}}>AI Tidbits / Fun Facts</h2>
      <div className={classes.tidbitContainer}>
        <p style={{fontSize:"1.3rem"}}>{currentTidbit}</p>
        <button onClick={getRandomTidbit} className={classes.shuffleButton}>
          <Shuffle size={20} />
        </button>
      </div>
      <button onClick={() => setShowForm(!showForm)} className={classes.submitButton}>
        Submit Your Unique Quote/Insight For A Chance To Be Featured
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className={classes.quoteForm}>
          <textarea
            value={userQuote}
            onChange={(e) => setUserQuote(e.target.value)}
            placeholder="Enter your AI quote or insight here..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AITidbits;
