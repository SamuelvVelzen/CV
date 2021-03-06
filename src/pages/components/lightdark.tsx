import React, { ReactElement } from 'react';
import ThemeContext from '../utilities/themecontext';
import './../../styles/style/components/lightdark.scss';

interface PropsInterface {
    // className: Dispatch<React.SetStateAction<string>>;
    className: string;
}

function LightDark(props: PropsInterface): ReactElement {
    return (
        <ThemeContext.Consumer>
            {({ toggleTheme }) => (
                <label className={`switch ${props.className}`}>
                    <input className='switch-input' type='checkbox' onChange={toggleTheme} />
                    <span className='switch-slider round'></span>
                </label>
            )}
        </ThemeContext.Consumer>
    );
}

export default LightDark;
