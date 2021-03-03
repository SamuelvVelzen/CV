import React, { ReactElement } from 'react';
import ThemeContext from '../utilities/themecontext';

// interface PropsInterface {
//     toggleLightDark: Dispatch<React.SetStateAction<string>>;
// }
import './../../styles/style/components/lightdark.scss';

function LightDark(): ReactElement {
    return (
        <ThemeContext.Consumer>
            {({ toggleTheme }) => (
                <label className='switch'>
                    <input className='switch-input' type='checkbox' onChange={toggleTheme} />
                    <span className='switch-slider round'></span>
                </label>
            )}
        </ThemeContext.Consumer>
    );
}

export default LightDark;
