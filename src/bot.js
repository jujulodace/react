
import React, { Component } from 'react'
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.socket = io('sangi.ddns.net:3001', { jsomp: false });
        this.socket.on("msg", (msg) => {
            console.log("réception socket " + msg)
            this.state.messages.push(<p>{msg}</p>);
            this.setState({
                chat:
                    <div className="ListMSG" id="chat">{this.state.messages}</div>,
                value: ""
            })
            this.scroll();
        })
        this.state = {
            value: '',
            messages: [],
            chat: <div className="ListMSG" id="chat"></div>
        }
    }
    scroll() {
        document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
    }
    messageSubmit(event) {
        console.log(this.state.value);
        if (this.state.value !== "") this.socket.emit("msg", this.state.value)

        event.preventDefault();
    }
    render() {
        return (
            <div className="corp">
                <p>salon de discussion test en react</p>
                <div className="zoneChat" >
                    {this.state.chat}
                    <form onSubmit={(this.messageSubmit.bind(this))}>
                        <label>
                            msg:  
                        </label>
                        <input type="text" value={this.state.value} onChange={(text) => this.setState({ value: text.target.value })} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Chat


