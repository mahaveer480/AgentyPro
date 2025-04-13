import React, { useState } from "react";
import "./css/faqs.css";
import aipng from '../assets/icons/AI.png';
import line from '../assets/icons/Line wrapper.png';

const faqs = [
  {
    question: "What is AgentyPro?",
    answer:
      "AgentyPro is a smart platform that helps you automate sales, scheduling, and customer service using artificial intelligence. Everything runs without human intervention, yet conversations sound 100% natural — just like a real person.",
  },
  {
    question: "What can I automate with AgentyPro?",
    answer:
      "You can automate conversations on WhatsApp, Instagram, Facebook Messenger, voice calls, emails, and more. Your AI agents can sell, book appointments, answer questions, send prices, and follow up — all automatically.",
  },
  {
    question: "Do I need technical knowledge to use AgentyPro?",
    answer:
      "Not at all. AgentyPro is designed to be extremely easy to use. Everything comes prebuilt based on your industry. You just choose your business type, connect your WhatsApp, and you’re up and running in minutes.",
  },
  {
    question: "What is an AI Agent and how does it work?",
    answer:
      "An AI agent is like having a virtual assistant working for you 24/7. You can create multiple agents: one for sales, one for scheduling, one for pricing — and they all respond naturally inside the same WhatsApp thread.",
  },
  {
    question: "How do the AI voice calls work?",
    answer:
      "AgentyPro can automatically call your clients using ultra-realistic AI voices to confirm appointments, follow up, or re-engage leads. If the call fails or your credits run out, the system will instantly switch to WhatsApp as a fallback — no action needed.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "You’ll get automatic alerts when your balance is low. You can top up manually or enable auto-recharge. AgentyPro will also switch channels smartly (e.g., from voice to WhatsApp) so you never lose a lead or sale.",
  },
  {
    question: "What real benefits will I see using AgentyPro?",
    answer:
      "More sales, less manual work, and a better experience for your clients. You’ll have instant responses, no human errors, and a 24/7 presence — even while you sleep. AgentyPro was built to revolutionize traditional communication and bring your business into the future of automation and customer engagement.",
  },
  {
    question: "Can I try AgentyPro before subscribing?",
    answer:
      "Yes! You’ll have access to a free demo or trial so you can test the platform and launch your first campaign in just a few minutes.",
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
