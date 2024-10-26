import { useEffect } from "react";
import "./Styles/Landing.css"
// import UpComing from "./UpComing";
// import Footer from "./Footer";
function Hero() {
    useEffect(() => {
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');

        // Initial canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        let particleCount = calculateParticleCount();

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
                this.fadeDelay = Math.random() * 600 + 100;
                this.fadeStart = Date.now() + this.fadeDelay;
                this.fadingOut = false;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() / 5 + 0.1;
                this.opacity = 1;
                this.fadeDelay = Math.random() * 600 + 100;
                this.fadeStart = Date.now() + this.fadeDelay;
                this.fadingOut = false;
            }

            update() {
                this.y -= this.speed;
                if (this.y < 0) {
                    this.reset();
                }

                if (!this.fadingOut && Date.now() > this.fadeStart) {
                    this.fadingOut = true;
                }

                if (this.fadingOut) {
                    this.opacity -= 0.008;
                    if (this.opacity <= 0) {
                        this.reset();
                    }
                }
            }

            draw() {
                ctx.fillStyle = `rgba(${255 - (Math.random() * 255 / 2)}, 255, 255, ${this.opacity})`;
                ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        function calculateParticleCount() {
            return Math.floor((canvas.width * canvas.height) / 6000);
        }

        function onResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particleCount = calculateParticleCount();
            initParticles();
        }

        window.addEventListener('resize', onResize);

        initParticles();
        animate();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="body">
            <div className="header">

                {/* <h2><a href="https://codepen.io/RAFA3L" target="_blank" rel="noopener noreferrer">RAFA</a></h2>
                <div className="mid-spot"></div>
                <button className="contact-btn">
                    <span className="glow"></span>
                    <span className="contact-btn-content">Contact Us</span>
                </button> */}

                <div className="spotlight">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <canvas id="particleCanvas"></canvas>

            <div className="accent-lines">
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="heroSubP">
                <p>Introducing</p>
            </div>
            <div className="hero">
                <div className="heroT">
                    <h2>HackFed</h2>
                    <h2>HackFed</h2>
                </div>
            </div>
            <p className="heroP">The world&apos;s best Community, <br />
                Code, Inovate & Dominate
            </p>
            <div className="mountains">
                <div></div>
                <div></div>
                <div></div>
            </div>
             {/* <div className="hero-spacer"></div> */}

            {/* <div className="content-section">
                <div className="content-acc">
                    <div></div>
                    <div></div>
                </div>
                <p className="subt">Revolutionary by design</p>
                <h3 className="title">Harness. Empower.<br />
                    Unmatched Versatility.</h3>
                <p className="subp">At the core lies our revolutionary framework, <br />ensuring adaptability across all application architectures.</p>
            </div> */}
        </div>

    )
}

export default Hero;
