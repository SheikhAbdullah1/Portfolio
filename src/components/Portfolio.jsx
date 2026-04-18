import { Reveal } from './Reveal';

const projects = [
    { cat: 'frontend-dev', img: '/Images/E-commerce.PNG', title: 'E-Commerce Store', desc: 'Developed a responsive E-Commerce store using HTML, CSS, and JavaScript, featuring smooth transitions, intuitive navigation, and an engaging user interface for seamless shopping experiences.', link: 'https://e-commerce-fronted-design.vercel.app/' },
    { cat: 'frontend-dev', img: '/Images/honey website.PNG', title: 'Honey Store', desc: 'Created a responsive Honey e-Commerce store using HTML, CSS, and JavaScript with smooth transitions.', link: 'https://honey-flax.vercel.app/' },
    { cat: 'frontend-dev', img: '/Images/EyeCare website.PNG', title: 'Health Care', desc: 'Eye Care website dedicated to promoting eye health awareness, featuring an AI-powered chatbot integrated across web, WhatsApp, Facebook Messenger, and Instagram. The chatbot offers personalized assistance and quick responses to eye care queries', link: 'https://eye-care-six.vercel.app/' },
    { cat: 'frontend-dev', img: '/Images/traveler website.PNG', title: 'Traveler Agency', desc: 'A modern travel agency website designed with HTML, CSS, and JavaScript, offering a seamless user experience for exploring destinations, booking trips, and accessing travel information. The website features an AI chatbot that provides quick assistance, destination recommendations, and booking support.', link: 'https://travelerbysheikh.netlify.app/' },
    { cat: 'frontend-dev', img: '/Images/Car market.PNG', title: 'Cars Store', desc: 'Created a responsive Car e-Commerce store like Olx using React with smooth transitions.', link: 'https://github.com/SheikhAbdullah1' },
    { cat: 'frontend-dev', img: '/Images/ochi web.PNG', title: 'Ochi Animated Website', desc: 'Created a animated website using React with smooth transitions.', link: 'https://github.com/SheikhAbdullah1' },
    { cat: 'fun-projects', img: '/Images/screencapture-127-0-0-1-5501-Portfolio-Projects-Section-Bulb-On-Off-index-html-2024-10-05-22_02_49.png', title: 'Toggle Bulb', desc: "Developed interactive toggle bulbs with HTML, CSS, and JavaScript for smooth 'on' and 'off' transitions.", link: 'https://togglebtnbysheikh.netlify.app' },
    { cat: 'fun-projects', img: '/Images/Rock Paper Game.png', title: 'Rock Paper Scissors Game', desc: 'Made a Rock Paper Scissors game with HTML, CSS, and JavaScript, including real-time score updates and a responsive UI.', link: 'https://rockgame-byshaikh.netlify.app' },
    { cat: 'frontend-dev', img: '/Images/Form Login and signup.png', title: 'Login & Sign Up Form', desc: 'Designed a login and signup form using HTML, CSS, and JavaScript with a sleek, user-friendly interface.', link: 'https://github.com/SheikhAbdullah1' },
];

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <Reveal direction="up">
                <h2 className="heading">Latest <span>Project</span></h2>
            </Reveal>

            <div className="portfolio-container">
                {projects.map((project, i) => (
                    <Reveal key={i} direction="up" delay={i * 0.06} className="portfolio-box">
                        <a href={project.link} target="_blank" rel="noreferrer" className="portfolio-link">
                            <img src={project.img} alt={project.title} />
                            <div className="portfolio-layer">
                                <h4>{project.title}</h4>
                                <p>{project.desc}</p>
                            </div>
                        </a>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
