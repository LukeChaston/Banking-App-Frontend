import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import accounts from './accounts'
import Submission from './submission'
import App from './App';


class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
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
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

