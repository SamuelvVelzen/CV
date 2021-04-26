import * as React from 'react';
import { ReactElement } from 'react';
import ThemeContext from './utilities/themecontext';
import Homepage from './pages/homepage';
import Error from './pages/error';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';

export default function App(): ReactElement {
    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <>
                    <div className={'app ' + theme}>
                        <Router>
                            <Navbar />

                            <Switch>
                                <Route exact path='/' component={Homepage} />
                                <Route path='*' component={Error} />
                            </Switch>

                            <Footer />
                        </Router>
                    </div>
                </>
            )}
        </ThemeContext.Consumer>
    );
}
