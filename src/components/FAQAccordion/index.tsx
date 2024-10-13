import React, { useState } from 'react';
import classes from './index.module.css';

const faqData = [
  {
    question: "How does the Priority Call work?",
    answer: "The $1 fee isn't about making money. It's a token of your commitment to innovating your business. It helps us prioritize those who are truly serious, allowing us to differentiate the talkers from the walkers."
  },
  {
    question: "How does your human-AI collaboration actually work?",
    answer: "Our approach combines the precision and efficiency of AI with the creativity and strategic thinking of human experts. We leverage AI for data processing and analysis, while our professionals provide strategic insights and nuanced understanding."
  },
  {
    question: "Are your services expensive?",
    answer: "We pride ourselves on being upfront and straightforward. Our efficient integration of AI allows us to offer high-quality services at competitive prices without compromising on quality."
  },
  {
    question: "How can I benefit from your exclusive course?",
    answer: "Absolutely! Our exclusive course is a unique opportunity to access the very same training our professionals receive. By backing our Kickstarter campaign, you'll unlock insider knowledge of AI-human collaboration techniques that are transforming businesses worldwide. This course empowers you to innovate like never before, providing you with practical skills to elevate your business to new heights. Join us, and be among the first to revolutionize your industry."
  },
  {
    question: "I'm not tech-savvy. Will I still benefit from your services?",
    answer: "Definitely! Our mission is to make advanced technological capabilities accessible and user-friendly, regardless of your technical background. We handle the complexities of AI, so you don't have to. You'll enjoy the benefits of cutting-edge innovation delivered in an understandable and relatable way, allowing you to focus on what you do best."
  },
  {
    question: "How do you ensure the confidentiality and security of my data?",
    answer: "Your trust is paramount to us. We go above and beyond to protect your information. All our team members are bound by comprehensive Non-Disclosure Agreements (NDAs), and we implement strict confidentiality protocols throughout our processes. We utilize secure systems and never input sensitive data into unsecured environments. Rest assured, your business information is handled with the utmost care and security."
  },
  {
    question: "Can your services be customized to my industry's specific needs?",
    answer: "Absolutely! Our team has extensive experience across various industries. We take the time to understand your unique challenges and goals, tailoring our solutions to fit your specific context. This personalized approach ensures you receive maximum value and relevant, effective results that drive real impact in your industry."
  },
  {
    question: "Are your solutions scalable as my business grows?",
    answer: "Absolutely. We design our services with scalability in mind. As your business evolves, our flexible hybrid approach allows us to adjust and expand our solutions in line with your growth. You'll continue to receive optimal support and innovative strategies at every stage of your business journey."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.faqItem}>
      <button
        className={`${classes.faqQuestion} ${isOpen ? classes.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={classes.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className={classes.faqAnswer}>{answer}</div>}
    </div>
  );
};

const FAQAccordion = () => {
  return (
    <div id="faq" className={classes.faqAccordion}>
      <h2 className={classes.faqTitle}>FAQ: Straight Talk</h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
