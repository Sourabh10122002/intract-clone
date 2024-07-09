import React from 'react';
import './Academy.css';
import TimerNft from '../components/CatNftClaim/TimerNft'
import HeroSection from '../components/HeroSection/HeroSection'
import Dropdown from '../components/DropDown/DropDown'
import IntroductionDrop from '../components/IntroDuctionDrop/IntroductionDrop'
import CatNft from '../components/CatNftClaim/CatNft'
import CatNftCertified from '../components/CatNftClaim/CatNftCertified'

const Academy = () => {
    return (
        <div>
            <HeroSection />
            <div className='esssential-center-nfts'>
                <Dropdown />
                <CatNft />
                <IntroductionDrop />
                <CatNftCertified />
                <TimerNft />
            </div>
        </div>
    )
}

export default Academy