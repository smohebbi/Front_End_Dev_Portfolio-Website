import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends ReactComponent {
    constructor(props) {
        super(props);
        this.state = {
            password: 'Hello',
            authorized: false
        }
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;    
        const auth = password == this.state.password;
        this.setState(
           {
            authorized: auth
           }
        )
    };

    render() {
        const login = (
            <form action='#' onSubmit={this.authorize}>
                <input type="password" placeholder="password" />
                <input type="submit" />
            </form>
        )
        
        const contactinfo = (
            <ul>
                <li>siavash.mohebbi@gmail.com</li>
                <li></li>
            </ul>
        );

        return (
            <div id="authorization">
                <h1>{this.state.authorized ? 'Contact' : "Enter the Password"}</h1>
                {this.state.authorized ? contactinfo : login}
            </div>
        );
    }
}

ReactDOM.render(<Contact />, document.getElementById('contactsInfo'));