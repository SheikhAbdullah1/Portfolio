import { Reveal } from './Reveal';

const Certificates = () => {
    return (
        <section className="certificates" id="certificates">
            <Reveal direction="up">
                <h2 className="heading">Our <span>Certificates</span> </h2>
            </Reveal>
            <div className="certificates-container">
                <Reveal direction="left" delay={0} className="certificates-box">
                    <img src="/certificates/CCNA_certificate.png" alt="CCNA Certificate" />
                </Reveal>
                <Reveal direction="right" delay={0.1} className="certificates-box">
                    <img src="/certificates/CPA_certificate.png" alt="CPA Certificate" />
                </Reveal>
            </div>
        </section>
    );
};

export default Certificates;
