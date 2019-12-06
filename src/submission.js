import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

class submission extends React.Component {
    render() {
        return(
            <div className="Submission">
                <h3> Enter new amount:</h3> <input type={onsubmit} name="submission"/>
            </div>
        )
    }
}

ReactDOM.render(<submission />, document.getElementById('root'));
