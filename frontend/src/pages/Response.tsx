import React from 'react';
import { useLocation } from 'react-router-dom';

const Response: React.FC = () => {
  const location = useLocation();
  const { answers, questions, formData } = location.state as any;

  const correctAnswers = questions.map((q: any) => q.correctAnswer);
  const score = answers.reduce((acc: number, answer: string, idx: number) => acc + (answer === correctAnswers[idx] ? 1 : 0), 0);

  // nanti nentuinnya dari sini
  let recommendation = '';
  if (score < 5) {
    recommendation = 'Kamu perlu belajar dasar-dasar lagi!';
  } else if (score < 10) {
    recommendation = 'Bagus! Tapi kamu masih perlu memperdalam pengetahuanmu.';
  } else {
    recommendation = 'Luar biasa! Kamu siap untuk melangkah lebih jauh.';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Hasil Tes</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <p className="mb-4">Hai, {formData.name}!</p>
        <p className="mb-4">Kamu menjawab {score} dari {questions.length} soal dengan benar.</p>
        <p className="font-bold text-lg mb-4">Rekomendasi: {recommendation}</p>
        <p className="mb-4">Karir yang kamu pilih: {formData.career}</p>
      </div>
    </div>
  );
};

export default Response;
