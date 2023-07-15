import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="bg-sky-600 m-3 p-2 rounded-xl cursor-pointer dark:bg-sky-950  text-[#ffffff] ml-auto"
      onClick={toggleDarkMode}
    > <span>Toggle Theme </span> 
      {darkMode ? '😎' : '🌞'}
    </button>
  );
};

export default DarkModeToggle;


