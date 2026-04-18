import { Reveal } from './Reveal';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Reveal direction="up">
                <h2 className="heading">Contact <span>Me!</span></h2>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
                <form action="https://formsubmit.co/sa1998636@gmail.com" method="POST">
                    <div className="input-box">
                        <input type="text" name="name" placeholder="Full Name" required />
                        <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-box">
                        <input type="number" name="phone" placeholder="Mobile Number" />
                        <input type="text" name="subject" placeholder="Email Subject" required />
                    </div>
                    <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
                    <input type="submit" value="Send Message" className="btn" />
                </form>
            </Reveal>
        </section>
    );
};

export default Contact;
