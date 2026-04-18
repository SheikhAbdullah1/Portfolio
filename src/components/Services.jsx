import { Reveal } from './Reveal';

const Services = () => {
    return (
        <section className="services" id="services">
            <Reveal direction="up" delay={0}>
                <h2 className="heading">Our <span>Services</span></h2>
            </Reveal>
            
            <div className="services-container">
                <Reveal direction="up" delay={0} className="services-box">
                    <h3>Website Development</h3>
                    <p>I create the visual and interactive aspects of websites and applications using HTML, CSS,
                        JavaScript, React and Native Apps, ensuring a seamless user experience and responsive design.</p>
                </Reveal>

                <Reveal direction="up" delay={0.09} className="services-box">
                    <h3>Gen AI Chatbot Development</h3>
                    <p>Create intelligent, natural-sounding AI chatbots to enhance customer engagement, automate workflows,
                        and streamline communication across platforms</p>
                </Reveal>

                <Reveal direction="up" delay={0.18} className="services-box">
                    <h3>Graphic Designing</h3>
                    <p>Graphic design involves creating visual content using tools like Adobe Illustrator and Photoshop to
                        communicate messages effectively through typography, imagery, and layout for various media.</p>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;
