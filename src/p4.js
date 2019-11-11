import React, { Component } from 'react'
import io from 'socket.io-client';



class tab extends Component {
    constructor(props) {
        super(props);
        this.socket = io('localhost:3001', { jsomp: false });
        this.socket.on('case', (click) => {
            this.setState({ lastClick: click })
            console.log("reception case" + this.state.lastClick)
        });
        a++;
        this.state = {
            case: a,
            lastClick: 0
        }
    }
    render() {
        return (
            <div>
                <Ligne /><Ligne /><Ligne /><Ligne /><Ligne />
            </div>
        )
    }
}

function Ligne() {
    return (
        <div className="ligne" >
            <Case /><Case /><Case /><Case /><Case /><Case /><Case />
        </div>
    )
}
var a = 0;
class Case extends Component {
    constructor(props) {
        super(props);
        this.socket = io('localhost:3001', { jsomp: false });
        
        a++;
        this.state = {
            case: a
        }
    }

    clicli() {
        var b = this.state.case
        this.socket.emit('case', this.state.case)
        console.log("envoie case")
    }
    render() {
        return (
            <div className="case" id={this.state.case} onClick={this.clicli.bind(this)}></div>
        )
    }
}

export default tab


