
import React from "react";

const DarkModeToggle: React.FC = () => {
  // Function to toggle the dark class on the <html>
  const toggleDarkMode = () => {
    const doc = document.documentElement;
    if (doc.classList.contains("dark")) {
      doc.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      doc.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Set initial theme from localStorage
  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="ml-2 rounded-full p-2 transition hover:bg-primary/10 border border-transparent hover:border-primary"
    >
      <span className="sr-only">Toggle dark mode</span>
      {/* Simple icon, sun for light, moon for dark */}
      <svg
        className="w-6 h-6 dark:hidden text-yellow-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
      <svg
        className="w-6 h-6 hidden dark:block text-yellow-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M12 3c.132 0 .263.003.393.008a9 9 0 0 0 8.599 11.614A8.978 8.978 0 0 1 12 21a9 9 0 0 1 0-18z"
        />
      </svg>
    </button>
  );
};

export default DarkModeToggle;
