// Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true);
    const menuItems = [
        { label: 'But what is crypto and web3?', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png', href: '/academy' },
        { label: 'Setting up your own web3 wallet!', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg', href: '/academy' },
        { label: 'What the heck is a blockchain?', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg', href: '/academy' },
        { label: 'Swapping and bridging? Whats that?', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg', href: '/academy' },
        { label: 'NFTs and why they are so cool;)', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg', href: '/academy' },
        { label: 'Doing Quests and Winning rewards!', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg', href: '/academy' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='dropdown-container'>
            <div className="dropdown">
                <div onClick={toggleDropdown} className={`dropdown-toggle ${isOpen ? 'dropdown-toggle-border' : ''}`}>
                    <div className="left-drop-head">
                        <img src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png" alt="quests" />
                        <div className="u6-quests">
                            6 Quests
                        </div>
                    </div>
                    <div className="right-drop-head-main">

                        <div className="right-drop-head">
                            <h2>
                                Basics of Crypto
                            </h2>
                            <p>The safest and easiest place to start your crypto journey!</p>
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
                                                    <p>11 Tasks</p>
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
            <div class="_essentials_section_moving_line">
                <svg width="121" height="19" viewBox="0 0 121 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M120 7.80708C94.898 1.43658 35.7551 -5.51932 0 17.6211" stroke="#A286F2" stroke-width="2" stroke-linecap="round" stroke-dasharray="8 8"></path></svg>
            </div>
            <div className="road-to-learner">
                <img src="/images/road-to-learner.svg" alt="road-to-learner" />
            </div>
        </div>
    );
};

export default Dropdown;
