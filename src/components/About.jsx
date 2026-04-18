import { Reveal } from './Reveal';

const About = () => {
    return (
        <section className="about" id="about">
            <Reveal direction="left" className="about-img">
                <img src="/Images/Office look img1.jpeg" alt="Sheikh Abdullah Hussain — professional portrait" />
            </Reveal>
            <Reveal direction="right" className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Web & App Developer | Gen AI Chatbot Developer</h3>
                <p>I am a results-driven <b>Web & App Developer</b> and <b>AI Chatbot Specialist</b> dedicated to building seamless digital experiences. 
                    With deep expertise in <b>React, React Native, and JavaScript</b>, I bridge the gap between robust frontend design and intelligent automation. 
                    My background in Enterprise and IT allows me to solve complex problems with efficient, scalable solutions. <br /><br />
                    Currently, I specialize in integrating <b>Generative AI</b> into modern ecosystems, crafting intelligent agents 
                    that transform user engagement. I thrive on turning visionary concepts into high-performance applications that deliver real value.
                </p>
                <a href="/cv.html" target="_blank" className="btn" rel="noreferrer">Read Professional CV</a>
            </Reveal>
        </section>
    );
};

export default About;
