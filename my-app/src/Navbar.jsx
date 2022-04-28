import React from 'react';

function Navbar() {
    return (
        <div>

            <ul className="navbar">
                <div className='logo'></div>  
                <li>Bosh sahifa</li>
                <li>Mahsulotlar</li>
                <li>Bizning jamoa</li>
                <li>Aloqa</li>
                <button className='btn1'>Ro'yhatdan o'tish</button>
                <button className='btn2'>Kirish</button>
            </ul>

        </div>
    );
}

export default Navbar;