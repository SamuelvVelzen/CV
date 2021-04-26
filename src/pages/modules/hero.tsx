import React, { ReactElement } from 'react';

import { ReactComponent as Arrow } from './../../styles/images/icons/arrow.svg';

import './../../styles/style/modules/hero.scss';

function Hero(): ReactElement {
    return (
        <section id={'hero'}>
            <div className='container'>
                <div className='row hero-inner'>
                    <div className='col-12 col-md-6 hero-text'>
                        <span className={'subtitle bold'}>
                            Hi, I am <span className={'text-primary'}>Samuel</span>
                        </span>
                        <span className='title bold'>And I do topic</span>
                    </div>

                    <img src='' alt='' className={'col-12 col-md-6 hero-image shadow'} />

                    <div className='arrows'>
                        <span>See more...</span>
                        <Arrow />
                        <Arrow />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
