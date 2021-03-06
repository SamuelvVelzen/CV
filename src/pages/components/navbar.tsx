import React, { ReactElement, useRef } from 'react';
import LightDark from './lightdark';

import './../../styles/style/components/navbar.scss';
import { Link } from 'react-router-dom';

function Navbar(): ReactElement {
    const menuItems = useRef<HTMLDivElement>(null),
        menuButton = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        if (menuItems && menuItems.current && menuButton && menuButton.current) {
            const item = menuItems.current,
                button = menuButton.current;

            if (button.classList.contains('open')) {
                button.classList.remove('open');
                item.classList.remove('open');
            } else {
                button.classList.add('open');
                item.classList.add('open');
            }
        }
    };

    window.addEventListener('resize', (event: UIEvent) => {
        if (window.innerWidth > 575) {
            if (menuItems && menuItems.current && menuButton && menuButton.current) {
                const item = menuItems.current,
                    button = menuButton.current;

                if (button.classList.contains('open')) {
                    button.classList.remove('open');
                    item.classList.remove('open');
                }
            }
        }
    });

    return (
        <nav className={'nav'}>
            <div className='container nav-inline'>
                <span className={'description subtitle bold'}>Samuel.</span>
                <LightDark className={'ml-auto'} />

                <div ref={menuButton} className='menu'>
                    <span className='menu-inner' onClick={toggleMenu}>
                        <span className='icon-left'></span>
                        <span className='icon-right'></span>
                    </span>
                </div>

                <div className='items' ref={menuItems}>
                    <Link to={''}>Introduction</Link>
                    <Link to={'error'}>Error</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
