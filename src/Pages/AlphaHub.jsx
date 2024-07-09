import React from 'react';
import JorDegens from '../components/JorDegens/JorDegens';
import Projects from '../components/Projects/Projects';
import Recommended from '../components/Recommended/Recommended';
import Popular from '../components/Popular/Popular';

const AlphaHub = () => {
    return (
        <div>
            <JorDegens />
            <Popular />
            <Recommended />
            <Projects />
        </div>
    )
}

export default AlphaHub