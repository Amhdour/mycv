import { useEffect, useState } from "react";
import shape3 from "/assets/img/shape/3.png";
import shape8 from "/assets/img/shape/8.png";
import team14 from "/assets/img/team/14.jpg";
import team15 from "/assets/img/team/15.jpg";
import team16 from "/assets/img/team/16.jpg";
import team17 from "/assets/img/team/17.jpg";
import about1 from "/assets/img/about/1.jpg";
import about2 from "/assets/img/about/2.jpg";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutV1 = () => {
    // Modal Video
    const [isOpen, setOpen] = useState(false);

    // Scroll Animation
    useEffect(() => {
        const upDown_Scroll = document.querySelector(".upDownScrol");

        if (upDown_Scroll) {
            gsap.set(upDown_Scroll, { yPercent: 105 });

            const scrollAnimation = gsap.to(upDown_Scroll, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: upDown_Scroll,
                    end: "bottom center",
                    scrub: 1,
                },
            });

            // Cleanup function to kill the animation on unmount
            return () => {
                scrollAnimation.kill();
                const scrollTriggers = ScrollTrigger.getAll();
                scrollTriggers.forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    return (
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src={about1} alt="About" />
                            <img src={about2} alt="About" className="shape-1" />
                            <img src={shape3} alt="Shape" className="shape-2" />
                            <img src={shape8} alt="Shape" className="shape-3" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2>About Me</h2>
                            <p>
                                As a skilled NLP Engineer, I specialize in
                                building models that can process, analyze, and
                                generate natural language. My expertise spans
                                various domains, including:
                            </p>
                            <ul>
                                <li>
                                    Text Classification & Sentiment Analysis
                                </li>
                                <li>Sentiment Analysis for Brand Monitoring</li>
                                <li>Chatbots for Customer Service</li>
                                <li>Personalized Marketing Campaigns</li>
                                <li>Voice Search Optimization</li>
                                <li>Content Generation</li>
                                <li>Social Media Monitoring</li>
                                <li>Customer Feedback Analysis</li>
                                <li>Market Trend Analysis</li>
                                <li>Email Marketing Optimization</li>
                                <li>Ad Targeting and Recommendation Systems</li>
                            </ul>
                            <p>In the healthcare sector, my work includes:</p>
                            <ul>
                                <li>Clinical Documentation</li>
                                <li>Medical Transcription</li>
                                <li>Sentiment Analysis for Patient Feedback</li>
                                <li>Chatbots for Patient Interaction</li>
                                <li>
                                    Predictive Analytics for Disease Outbreaks
                                </li>
                                <li>Drug Discovery and Development</li>
                                <li>Personalized Medicine</li>
                                <li>Automated Coding and Billing</li>
                                <li>Symptom Checkers</li>
                                <li>Clinical Trial Matching</li>
                            </ul>
                            <p>
                                In addition to my NLP work, I have extensive
                                experience in full-stack development, enabling
                                me to design and implement end-to-end solutions.
                                My tech stack includes:
                            </p>
                            <ul>
                                <li>
                                    <strong>Frontend:</strong> React,
                                    TypeScript, HTML5, CSS3
                                </li>
                                <li>
                                    <strong>Backend:</strong> Node.js, Express,
                                    Python (Flask/Django)
                                </li>
                                <li>
                                    <strong>Databases:</strong> MongoDB,
                                    PostgreSQL, MySQL
                                </li>
                                <li>
                                    <strong>Cloud Services:</strong> AWS, Google
                                    Cloud, Azure
                                </li>
                            </ul>
                            <p>
                                My passion lies at the intersection of these
                                fields, where I can leverage my full-stack
                                background to build robust, scalable
                                applications powered by cutting-edge NLP
                                technologies.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutV1;
