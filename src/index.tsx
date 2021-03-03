import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style/index.scss';
import './styles/style/utilities/theme.scss';
import App from './pages/app';

ReactDOM.render(
    <React.StrictMode>
        <div className={`App light`}>
            <App />
        </div>
    </React.StrictMode>,
    document.getElementById('root'),
);
