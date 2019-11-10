
import React, { Component, TextInput } from 'react'
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.socket = io('localhost:3001', { jsomp: false });
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className="corp">
                <p>salon de discussion test en react</p>
                <div className="zoneChat">
                    <form onSubmit={this.handleSubmit}>

          <input type="text" value={this.state.value} onChange={this.handleChange} />

          
                    </form>
                </div>
            </div>
        )
    }
}

export default Chat


