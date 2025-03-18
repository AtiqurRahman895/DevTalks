import React from 'react'
import PfpAnswerCard from './PfpAnswerCard';

const PfpAllAnswer = () => {
  const answeredQuestions = [
    {
      id: 1,
      question: "How does React handle state updates efficiently?",
      answer:
        "React uses a virtual DOM to batch and optimize state updates before applying them to the real DOM, reducing re-renders and improving performance.",
      votes: { upvotes: 42, downvotes: 3 },
      date: "March 15, 2025",
      tags: ["React", "JavaScript", "State Management"],
    },
    {
      id: 2,
      question: "What are the key differences between var, let, and const?",
      answer:
        "'var' is function-scoped and can be redeclared. 'let' is block-scoped and cannot be redeclared. 'const' is also block-scoped but immutable after assignment.",
      votes: { upvotes: 35, downvotes: 1 },
      date: "March 12, 2025",
      tags: ["JavaScript", "ES6"],
    },
    {
      id: 3,
      question: "How do you optimize performance in a React application?",
      answer:
        "Use React.memo, lazy loading, code splitting, and avoid unnecessary state updates to optimize performance.",
      votes: { upvotes: 55, downvotes: 5 },
      date: "March 10, 2025",
      tags: ["React", "Performance"],
    },
    {
      id: 4,
      question: "What is the difference between SQL and NoSQL databases?",
      answer:
        "SQL databases use structured tables and predefined schemas, while NoSQL databases offer flexible schemas and are designed for scalability.",
      votes: { upvotes: 28, downvotes: 2 },
      date: "March 8, 2025",
      tags: ["Databases", "SQL", "NoSQL"],
    },
    {
      id: 5,
      question: "How do closures work in JavaScript?",
      answer:
        "Closures allow functions to retain access to variables from their parent scope even after the parent function has finished executing.",
      votes: { upvotes: 40, downvotes: 2 },
      date: "March 5, 2025",
      tags: ["JavaScript", "Closures"],
    },
  ];
    
  return (
    <div className='grid gap-3'>
      {answeredQuestions.map(answer=><PfpAnswerCard key={answer.id} answer={answer} />)}
    </div>
  )
}

export default PfpAllAnswer
