import React, { ReactElement } from 'react';
import Hero from '../modules/hero';

import './../../styles/style/pages/homepage.scss';
import FullText from '../modules/fullText';
import BannerText from '../modules/bannerText';
import Projects from '../components/projects';

function Homepage(): ReactElement {
    return (
        <main>
            <Hero />
            <FullText />
            <BannerText />
            <Projects />
        </main>
    );
}

export default Homepage;
