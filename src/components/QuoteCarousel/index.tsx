import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import classes from './index.module.css';


const quotes = [
  {
    text: "AI and humans working together can achieve what neither could alone.",
    author: "Fei-Fei Li"
  },
  {
    text: "AI doesn't replace humans; it empowers them to achieve more.",
    author: "Andrew Ng"
  },
  {
    text: "The synergy of human creativity and machine efficiency creates unparalleled solutions.",
    author: "Sundar Pichai"
  },
  {
    text: "AI is about augmenting human intelligence, not replacing it.",
    author: "Ginni Rometty"
  },
  {
    text: "Human intelligence combined with AI creates a force that transforms industries.",
    author: "Demis Hassabis"
  },
  {
    text: "The future of work is AI assisting humans, not replacing them.",
    author: "Jensen Huang"
  },
  {
    text: "AI unlocks creativity by handling the mundane, allowing humans to focus on innovation.",
    author: "Eric Schmidt"
  },
  {
    text: "AI allows humans to focus on what they do best: creativity, empathy, and innovation.",
    author: "Sam Altman"
  },
  {
    text: "The best results come from combining human insights with AI's precision.",
    author: "Thomas Kurian"
  },
  {
    text: "AI will amplify human abilities and push the boundaries of what we can achieve.",
    author: "Elon Musk"
  },
  {
    text: "AI is a partner in innovation, allowing humans to achieve unprecedented breakthroughs.",
    author: "Sergey Brin"
  },
  {
    text: "The combination of human insight and AI's capabilities is the future of innovation.",
    author: "Kai-Fu Lee"
  },
  {
    text: "Innovation thrives when AI amplifies human creativity.",
    author: "MotivaTeam"
  },
  {
    text: "The synergy of human insight and AI efficiency unlocks new possibilities.",
    author: "MotivaTeam"
  },
  {
    text: "Combining AI with human expertise leads to consistent excellence.",
    author: "MotivaTeam"
  },
  {
    text: "Human judgment guides AI's capabilities toward meaningful outcomes.",
    author: "MotivaTeam"
  },
  {
    text: "Collaboration between AI and humans is shaping the future of work.",
    author: "MotivaTeam"
  },
  {
    text: "Human creativity combined with AI's precision leads to breakthroughs.",
    author: "MotivaTeam"
  }
];

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    let progressTimer;

    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setProgress(0);
      }, 5000);

      progressTimer = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
      }, 50);
    }

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [isPlaying]);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    setProgress(0);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={classes.quoteCarousel}>
      <div className={classes.quoteContainer}>
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`${classes.quoteItem} ${index === currentIndex ? classes.active : ''}`}
          >
            <blockquote className={classes.quoteText}>
              "{quote.text}"
            </blockquote>
            <p className={classes.quoteAuthor}>- {quote.author}</p>
          </div>
        ))}
      </div>
      <div className={classes.controlsContainer}>
        <button onClick={prevQuote} className={classes.controlButton}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={togglePlay} className={classes.controlButton}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button onClick={nextQuote} className={classes.controlButton}>
          <ChevronRight size={24} />
        </button>
      </div>
      <div className={classes.progressBarContainer}>
        <div
          className={classes.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuoteCarousel;


