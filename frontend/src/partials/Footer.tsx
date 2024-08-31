import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-300 to-indigo-400 p-4 flex justify-between items-center">
      {/* Copyright */}
      <p className="text-white">&copy; 2024 iki.py. All rights reserved.</p>
      
      {/* GitHub Logo */}
      <a href="https://github.com/codejiva" target="_blank" rel="noopener noreferrer">
        <img src="path/to/github-logo.png" alt="GitHub Logo" className="h-8 w-8" />
      </a>
    </footer>
  );
}

export default Footer;
