import { useState } from "react";
import img from "../assets/f.png";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  // State to track which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded state of a question
  const toggleQuestion = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  // Sample questions and answers
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5 py-8">
      {/* Left side with image */}
      <div
        className="hidden lg:block w-full lg:w-1/2 mb-8 lg:mb-0 px-5"
        style={{ height: "50%" }}
      >
        <img src={img} alt="FAQ Illustration" className="w-auto h-auto" />
      </div>

      {/* Right side with FAQ */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            {/* Question with toggle icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="font-semibold">{faq.question}</div>
              <div>{expandedQuestion === index ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {/* Answer */}
            {expandedQuestion === index && (
              <p className="mt-2 text-sm lg:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
