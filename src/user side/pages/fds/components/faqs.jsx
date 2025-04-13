import React, { useState } from "react";
import "./css/faqs.css";
import aipng from '../assets/icons/AI.png'
import line from '../assets/icons/Line wrapper.png'

const faqs = [
  {
    question: "What is Talkeen?",
    answer:
      "Talkeen is an intelligent AI platform that helps service businesses communicate with their customers automatically, just like a real person would. Our AI agents sell, answer messages, schedule appointments, provide information, follow up with leads, and even make voice calls with realistic cloned voices. It's like having a 24/7 sales and service team that never sleeps and knows your business inside out",
  },
  {
    question: "Does the AI really sound human?",
    answer: "Yes, the AI uses advanced voice models that sound human-like.",
  },
  {
    question: "Do I need to be tech-savvy to use Talkeen?",
    answer:
      "Not at all. Talkeen is designed for ease-of-use and requires no coding skills.",
  },
  {
    question: "Can I train the AI to fit my business?",
    answer:
      "Absolutely! You can customize responses and train it to handle your business-specific needs.",
  },
  {
    question: "Is it safe to let the AI talk to my clients?",
    answer: "Yes, Talkeen uses secure and monitored channels for all communication.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <button className="faq-btn">
          <img src={aipng} alt="icon" />
          FAQ
        </button>
        <h2>Frequently Asked Questions</h2>
        <p>Find Answers to Common Questions About AgentyPro</p>
      </div>

      <div className="faq-right">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleIndex(index)}
            >
              <img src={line} alt="icon" className="line_" />
              <span>{item.question}</span>
              <span className={`arrow ${activeIndex === index ? "up" : ""}`}>
                &#9662;
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
