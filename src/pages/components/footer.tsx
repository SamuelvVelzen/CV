import React, { ReactElement } from 'react';

import linkedin from './../../styles/images/icons/linkedin.svg';
import mail from './../../styles/images/icons/mail.svg';
import github from './../../styles/images/icons/github.svg';

import './../../styles/style/components/footer.scss';

function Footer(): ReactElement {
    return (
        <footer>
            <div className='container footer-inner'>
                <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/samuelvvelzen/'>
                    <img src={linkedin} alt='linkedin' />
                </a>

                <a target='_blank' rel='noopener noreferrer' href='mailto:samuelvvelzen@icloud.com'>
                    <img src={mail} alt='e-mail me' />
                </a>

                <a target='_blank' rel='noopener noreferrer' href='https://github.com/SamuelvVelzen'>
                    <img src={github} alt='github' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
