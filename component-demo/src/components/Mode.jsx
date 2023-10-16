import React, { useState, useEffect } from 'react';

const Theme = {
  light: {
    background: '#fff',
    color: '#333',
  },
  dark: {
    background: '#000',
    color: '#fff',
  },
};

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  return (
    <div>
      <h1 style={{ color: theme.color }}>This is the title</h1>
      <p style={{ background: theme.background }}>This is a paragraph</p>
    </div>
  );
};

export default App;
