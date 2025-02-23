
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('bg-dark', isDark);
    }, [isDark]);

    return (
        <button 
            onClick={() => setIsDark(!isDark)}
            className="theme-toggle"
            aria-label="Toggle theme"
        >
            {isDark ? '🌞' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
