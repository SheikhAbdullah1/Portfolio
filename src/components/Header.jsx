import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = document.documentElement.getAttribute('data-theme');
        setIsDarkMode(theme === 'dark');
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="header">
            <div className="logo">Sheikh Abdullah</div>
            <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
                <span className="menu-icon">☰</span>
            </button>
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#services" onClick={closeMenu}>Services</a>
                <a href="#portfolio" onClick={closeMenu}>Projects</a>
                <a href="#certificates" onClick={closeMenu}>Certificate</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
                <button id="theme-toggle" className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
                    <span className="icon" id="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
