import { React, useState, useEffect } from 'react';
import './TimerNft.css';

function TimerNft() {
    const calculateTimeLeft = () => {
        const now = new Date();
        const nextMidnight = new Date(now);
        nextMidnight.setHours(24, 0, 0, 0); // Set time to next midnight (12 AM)
        const difference = nextMidnight - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="timer-nft-center">
            <div className='timer-nft'>
                <div className="real-timer">
                    <div className="rewards-unlock-in">
                        <div className="clock-head"><i className="fa-regular fa-clock"></i></div>
                        Rewards unlock in
                    </div>
                    <hr />
                    <div className="timer-running">
                        <img src="https://www.intract.io/assets/dotBg-149528a0.png" alt="dot background" />
                        <div className="time-left-day">
                            <h3>00</h3>
                            <p>Days</p>
                        </div>
                        <div className="time-left-hours">
                            <h3>{timeLeft.hours}</h3>
                            <p>Hours</p>
                        </div>
                        <div className="time-left-minutes">
                            <h3>{timeLeft.minutes}</h3>
                            <p>Minutes</p>
                        </div>
                        <div className="time-left-seconds">
                            <h3>{timeLeft.seconds}</h3>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="final-reward">
                    <img src="https://www.intract.io/assets/kol-reward-12e6ae06.gif" className='monkey-bayc' alt="monkey-bayc" />
                    <div className="lucky-draw-txt">Lucky draw</div>
                    <div className="exclusive-conmmunity">
                        <div>Exclusive Community</div>
                        <span><img src="https://www.intract.io/assets/discord-50baa5cf.svg" alt="discord-icon" /><p>Earndrop</p></span></div>
                    <hr className="custom_hr2" />
                    <div className="complete-essential">
                        <div>Complete all Essential quests</div>
                        <div className="check-cn-2"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <div class="alpha-hub-quest">
                        <div>Complete at least 1 Alpha Hub quest today</div>
                        <div class="check-cn-2"><i class="fa-solid fa-check"></i></div>
                    </div>
                    <div class="final-reward-claim">
                        <div>Claim Now</div>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <img src="https://www.intract.io/assets/reward-info-path-571d6141.svg" alt="lines" className='line-connect-nft-box' />
                    <div class="reward_details_container">
                        <div class="_reward_details_header">
                            Reward info
                            <i class="fa-solid fa-info"></i>
                        </div>
                        <div class="_reward_details_body">
                            <p><span>Free access to paid KOL (crypto earning) communities!</span></p><br /><p>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p><br /><p>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimerNft