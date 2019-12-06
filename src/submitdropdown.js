import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

class AccountSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('you have selected ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="luke">Luke</option>
                        <option value="josh">Josh</option>
                        <option value="alex">Alex</option>
                        <option value="jason">Jason</option>
                        <option value="john">John</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render( <AccountSelection />, document.getElementById('root'));