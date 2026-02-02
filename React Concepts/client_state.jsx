import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false); // client state

  return (
    <div 
    style={{ background: darkMode ? "#333" : "#fff", 
        color: darkMode ? "#fff" : "#000",   }}
        >
      <p>Current theme: {darkMode ? "Dark" : "Light"}</p>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
}
export default ThemeToggle;
