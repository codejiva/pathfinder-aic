import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Tes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state as any;

  // Contoh soal - nanti bisa diganti dengan soal sesuai karir yang dipilih
  const questions = [
    { question: 'Apa hasil dari 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
    { question: 'Apa itu React?', options: ['Library', 'Framework', 'Programming Language'], correctAnswer: 'Library' },
    // Tambahkan soal lainnya
  ];

  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/response', { state: { answers, questions, formData } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Tes Karir</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {questions.map((q, idx) => (
          <div key={idx} className="mb-4">
            <p className="mb-2">{q.question}</p>
            {q.options.map((option, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${idx}`}
                  value={option}
                  checked={answers[idx] === option}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
          Submit Tes
        </button>
      </form>
    </div>
  );
};

export default Tes;
