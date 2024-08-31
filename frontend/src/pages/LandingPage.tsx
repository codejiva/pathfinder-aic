import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-indigo-400">
      <h1 className="text-5xl font-bold text-white mb-6">Selamat datang di <span className='text-blue-600'>Path</span><span className='text-yellow-300'>Finder</span></h1>
      <p className="text-xl text-white mb-12 text-center">
        Anda nganggur? Mau belajar IT biar gak beban? Coba cek khodam di sini!
      </p>
      <a href="form" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
        Ambil Tes
      </a>
    </div>
  );
};

export default LandingPage;
