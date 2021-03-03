import * as React from 'react';
import { ReactElement } from 'react';
import Navbar from './components/navbar';
import ThemeContext from './utilities/themecontext';

export default function App(): ReactElement {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div className={theme}>
                    <Navbar />
                </div>
            )}
        </ThemeContext.Consumer>
    );
}
