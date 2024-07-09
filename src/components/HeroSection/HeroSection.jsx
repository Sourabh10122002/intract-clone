import React from 'react'
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div>
            <div className="hero-section">
                <img className='hero-background' src="https://www.intract.io/assets/intract-academy-background-5547a705.png" alt="hero-background" />
                <div className="hero-info">
                    <div className="hero-head">
                        <img src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif" alt="intract academy" />
                    </div>
                    <div className="hero-para">
                        <p><span>Intract users</span> have together made more than <span> $100 million</span> in web3.<br />
                            Join them and <span>learn how to earn crypto!</span></p>
                        <div className="get-started">
                            <button>Get Started<i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection