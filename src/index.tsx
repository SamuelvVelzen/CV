import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import App from './pages/app';
import ThemeContext from './pages/utilities/themecontext';
import './styles/style/index.scss';
import './styles/style/utilities/theme.scss';
import { Provider } from 'react-redux';
import store from './store/store';

function Index() {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = function () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeContext.Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root'),
);
