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
                            <h2>Professional Overview</h2>
                            <p>
                                As a Natural Language Processing Engineer, I develop sophisticated 
                                machine learning models for language understanding and generation. 
                                My expertise encompasses:
                            </p>
                            <ul>
                                <li>Advanced Text Classification Systems</li>
                                <li>Enterprise-grade Sentiment Analysis</li>
                                <li>Intelligent Conversational Systems</li>
                                <li>Data-driven Marketing Solutions</li>
                                <li>Advanced Search Optimization</li>
                                <li>Automated Content Generation</li>
                                <li>Real-time Social Analytics</li>
                                <li>Customer Intelligence Systems</li>
                                <li>Predictive Market Analytics</li>
                                <li>Marketing Automation Solutions</li>
                                <li>AI-powered Recommendation Engines</li>
                            </ul>
                            <p>Healthcare Technology Innovation:</p>
                            <ul>
                                <li>Automated Medical Documentation</li>
                                <li>Intelligent Transcription Systems</li>
                                <li>Healthcare Experience Analytics</li>
                                <li>Medical Virtual Assistants</li>
                                <li>Epidemiological Prediction Models</li>
                                <li>AI-assisted Drug Research</li>
                                <li>Precision Medicine Solutions</li>
                                <li>Healthcare Process Automation</li>
                                <li>AI-powered Diagnostic Support</li>
                                <li>Clinical Research Optimization</li>
                            </ul>
                            <p>
                                Technical Expertise in Full-Stack Development:
                            </p>
                            <ul>
                                <li>
                                    <strong>Frontend Architecture:</strong> React, TypeScript, 
                                    Modern HTML5/CSS3
                                </li>
                                <li>
                                    <strong>Backend Systems:</strong> Node.js, Express, 
                                    Python (Flask/Django)
                                </li>
                                <li>
                                    <strong>Database Technologies:</strong> MongoDB, 
                                    PostgreSQL, MySQL
                                </li>
                                <li>
                                    <strong>Cloud Infrastructure:</strong> AWS, Google 
                                    Cloud, Azure
                                </li>
                            </ul>
                            <p>
                                My expertise lies in bridging advanced NLP technologies 
                                with robust software engineering practices to deliver 
                                scalable, enterprise-grade solutions that drive business value.
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
