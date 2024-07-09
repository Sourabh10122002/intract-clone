import React from 'react'
import './CatNft.css'

const CatNftCertified = () => {
    return (
        <div className="flex-end-nft">
            <div className='nft-tasks'>
                <div className="ticking-tick">
                    <i className="fa-solid fa-check"></i>
                </div>
                <div className="cat-outer-img">
                    <div className="cat-inner-img">
                        <img src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png" alt="cat" />
                    </div>
                    <div className="lockin-lock">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                </div>
                <div className="nft-claim-head">Intract Certified: Earner NFT</div>
                <div className="nft-claim-para">Your proof of<br />airdrop expertise</div>
                <button className='claim-btn-nft' disabled>Claim</button>
            </div>
            <div className="learner-nft-after">
                <svg width="778" height="329" viewBox="0 0 778 329" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1016_21647)"><path d="M386.615 8C455.063 12.0917 620.356 28.8358 544.235 94.4422C457.798 168.94 638.298 187.8 747.615 190" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-dasharray="8 8"></path><path d="M747.5 190C726.099 225.723 543.202 363.742 389 278.5C149.5 146.106 1.23354 246.726 15.3849 305.717" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-dasharray="8 8"></path></g><defs><clipPath id="clip0_1016_21647"><rect width="778" height="329" fill="white"></rect></clipPath></defs></svg>
            </div>
        </div>
    )
}

export default CatNftCertified