import * as React from 'react';
import { ReactElement } from 'react';
import ThemeContext from './utilities/themecontext';
import Introduction from './pages/introduction';
import Error from './pages/error';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App(): ReactElement {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <>
                    <div className={'app ' + theme}>
                        <Router>
                            <Navbar />
                            <Switch>
                                <Route exact path='/' component={Introduction} />
                                <Route path='*' component={Error} />
                            </Switch>
                        </Router>
                    </div>
                </>
            )}
        </ThemeContext.Consumer>
    );
}
