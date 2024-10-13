import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import classes from './index.module.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
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
