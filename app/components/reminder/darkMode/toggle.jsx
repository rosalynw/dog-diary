'use client'

import { useEffect, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

export default function DarkMode() {
  const [isDarkMode, setDarkMode ] = useState(false);

useEffect(() => {
  const savedMode = localStorage.getItem('darkMode') === 'true';
  setDarkMode(savedMode);

  if (savedMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);


const toggleDarkMode = (checked) => {
  setDarkMode(checked);

  if (checked) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('darkMode', checked);
};

return (
  <DarkModeSwitch
  style={{ marginBottom: '2rem' }}
  checked={isDarkMode}
  onChange={toggleDarkMode}
  size={80}
  />
)
}