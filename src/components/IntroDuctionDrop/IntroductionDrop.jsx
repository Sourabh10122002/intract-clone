// Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../DropDown/DropDown.css';

const IntroductionDrop = () => {
    const [isOpen, setIsOpen] = useState(true);
    const menuItems = [
        { label: 'What are airdrops and how can they change your life?', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png', href: '/academy' },
        { label: 'Different type of airdrops and how to earn?', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg', href: '/academy' },
        { label: 'How to earn huge $$$ from airdrops?', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg', href: '/academy' },
        { label: 'Things to keep in mind for airdrops!', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg', href: '/academy' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="dropdown">
                <div onClick={toggleDropdown} className={`dropdown-toggle ${isOpen ? 'dropdown-toggle-border' : ''}`}>
                    <div className="left-drop-head">
                        <img src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png" alt="quests" />
                        <div className="u6-quests">
                            6 Quests
                        </div>
                    </div>
                    <div className="right-drop-head-main">

                        <div className="right-drop-head">
                            <h2>
                                Introduction to Airdrops
                            </h2>
                            <p>Your best bet to make it big in crypto!</p>
                        </div>
                        <div className="right-drop-head-xp">
                            <img src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="xp" />
                            1490 XPs
                        </div>
                    </div>
                    <div className={`caret ${isOpen ? 'caret-up' : 'caret-down'}`}>
                        <i className="fa-solid fa-caret-up"></i>
                    </div>
                </div>
                {isOpen && (
                    <div className="dropdown-menu">
                        {
                            menuItems.map((item, idx) => {
                                return (
                                    <Link className="drop-menu-list" to={item.href} key={idx}>
                                        <div className="drop-menu-lofer">
                                            <div className="drop-menu-img">
                                                <img src={item.image} alt="list" />
                                            </div>
                                            <div className="drop-menu-data">
                                                <div className="drop-menu-heading">#{idx}: {item.label}</div>
                                                <div className="drop-menu-para">
                                                    <p>6 Tasks</p>
                                                    <div className="progress-bar">
                                                        <div className="inner-progress-bar"></div>
                                                    </div>
                                                    <div className="ticking-tick">
                                                        <i class="fa-solid fa-check"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                )}
            </div>
            <div className="road-to-learner">
                <img src="/images/road-to-learner.svg" alt="road-to-learner" />
            </div>
        </div>
    );
};

export default IntroductionDrop;
