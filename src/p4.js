import React, { Component } from 'react'
import io from 'socket.io-client';

var j={n:Math.floor(100*Math.random())};
class tab extends Component {
    constructor(props) {
        super(props);
        this.socket = io('localhost:3001', { jsomp: false });
        this.socket.on('case', (click,j) => {
            this.setState({ lastClick: click })
            console.log("reception case" + this.state.lastClick+" "+j)
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
    componentWillUnmount() {
        console.log("suppression element");
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
        this.socket.emit('case', this.state.case,j.n)
        console.log("envoie case"+j.n)
    }
    render() {
        return (
            <div className="case" id={this.state.case} onClick={this.clicli.bind(this)}></div>
        )
    }

}

export default tab


