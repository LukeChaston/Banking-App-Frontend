import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import accounts from './accounts'
import submission from './submission'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';


class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div name="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/accounts">Accounts</Link>
                        </li>
                        <li>
                            <Link to="/submission">Change Balance</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={ App }/>
                        <Route path='/accounts' component={ accounts }/>
                        <Route path='/submission' component={ submission }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));
