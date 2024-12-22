import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to Bite Club We are committed to providing excellent service and high-quality products to our customers. 
                Our goal is to create value and deliver a seamless experience for everyone we serve.
            </p>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower businesses and individuals through innovative solutions, offering products and services 
                    that meet the needs of today's dynamic world.
                </p>
            </section>
            <section className="team">
                <h2>Our Team</h2>
                <p>
                    Our team consists of passionate professionals with diverse skills and backgrounds, all working together to 
                    drive our vision forward. From customer service to product development, we are dedicated to excellence.
                </p>
            </section>
            <section className="contact-info">
                <UserClass name={"Abhishek" } location={"Kalyan"}/>
            </section>
        </div>
    );
};

export default About;
