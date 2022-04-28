import React from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';

function Container() {
    return (
        <div className='container'>
            <Navbar />
            <MainContent />
        </div>
    );
}

export default Container;