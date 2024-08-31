import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    edu: '',
    it: '',
    career: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    navigate('/tes', { state: { formData } });
  };

  return (
    <div id="form" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Isi ye!</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Nama lu, kocak.</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="edu" className="block text-gray-700 mb-2">Pendidikan</label>
          <select
            name="edu"
            id="edu"
            value={formData.edu}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Pilih tingkatan</option>
            <option value="sd">SD</option>
            <option value="smp">SMP</option>
            <option value="sma">SMA/SMK/Sederajat</option>
            <option value="d1">D-I</option>
            <option value="d2">D-II</option>
            <option value="d3">D-III</option>
            <option value="d4">S1/D-IV</option>
            <option value="s2">S2</option>
            <option value="s3">S3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Punya pengalaman IT?</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="it"
                value="yes"
                checked={formData.it === 'yes'}
                onChange={handleChange}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Iya</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="it"
                value="no"
                checked={formData.it === 'no'}
                onChange={handleChange}
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Nggak</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="career" className="block text-gray-700 mb-2">Yang dipengen</label>
          <select
            name="career"
            id="career"
            value={formData.career}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Pilih karirrrrrrrr</option>
            <option value="full">Fullstack Developer</option>
            <option value="fe">Frontend Developer</option>
            <option value="be">Backend Developer</option>
            <option value="ds">Data Scientist</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
          Ikuti Tes
        </button>
      </form>
    </div>
  );
};

export default Form;
