import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Web & App Developer',
  'React Developer',
  'Gen AI Chatbot Developer',
  'Python Developer'
];

const Hero = () => {
    const [currentText, setCurrentText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        let charIndex = 0;
        let typingInterval;
        
        const typeRole = () => {
             const currentRole = roles[roleIndex];
             typingInterval = setInterval(() => {
                setCurrentText(currentRole.substring(0, charIndex + 1));
                charIndex++;
                if(charIndex === currentRole.length) {
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setRoleIndex((prev) => (prev + 1) % roles.length);
                    }, 2000);
                }
             }, 100);
        };
        typeRole();
        
        return () => {
            clearInterval(typingInterval);
        };
    }, [roleIndex]);

    return (
        <section className="home" id="home">
            <motion.div 
               className="home-content"
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.2 }}
            >
                <p className="home-greeting">Hello, It's Me</p>
                <h1 className="home-name">Sheikh Abdullah Hussain</h1>
                <p className="home-role">And I'm a <span className="highlight" id="role">{currentText}</span></p>

                <p className="home-intro">I am a dynamic and passionate front-end developer with a strong foundation in HTML, CSS, JavaScript and
                    modern frameworks like React and React Native. Passionate about translating creative ideas into
                    responsive, user-friendly interfaces, I am committed to continuous learning and delivering high-quality
                    code.</p>
                
                <div className="social-media home-social">
                    <a href="https://www.facebook.com/profile.php?id=100030465450562" target="_blank" rel="noreferrer" aria-label="Visit Facebook Profile">
                        <img src="/Images/facebook.png" alt="Facebook" /></a>
                    <a href="https://github.com/SheikhAbdullah1" target="_blank" rel="noreferrer" aria-label="Visit GitHub Profile">
                        <img src="/Images/github.png" alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/sheikhabdullah.hussain/" target="_blank" rel="noreferrer" aria-label="Visit Instagram Profile">
                        <img src="/Images/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/sheikh-abdullah-hussain/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn Profile">
                        <img src="/Images/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
                <a href="/cv.html" target="_blank" className="btn btn-cv" rel="noreferrer">Download CV</a>
            </motion.div>

            <motion.div 
                className="home-img"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <img src="/Images/Office_look_img1-removebg-preview.png" alt="Sheikh Abdullah Hussain — professional transparent portrait" />
            </motion.div>
        </section>
    );
};

export default Hero;
