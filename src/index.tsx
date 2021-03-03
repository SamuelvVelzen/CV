import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style/index.scss';
import './styles/style/utilities/theme.scss';
import App from './pages/app';
import ThemeContext from './pages/utilities/themecontext';

function Index() {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = function () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <App />
        </ThemeContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root'),
);
