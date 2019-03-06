import React, { Component } from 'react';
import axios from 'axios';


var messageid = null;
class MessageThread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageContents: '',
        }
    }
    componentDidMount() {
        messageid = this.props.history.location.pathname.substring(18);
        console.log(" mess " + messageid);
        console.log("in Compoenent did mount Message Thread" + this.props.history.location.pathname)
        console.log("messageid +" + messageid)

        axios.get(`http://5c5a21f9af3ff700140de477.mockapi.io/api/email/${messageid}`)
            .then((response) => {
                console.log("response.data" + JSON.stringify(response.data));
                if (response.status === 200) {
                    this.setState({
                        messageContents: response.data
                    })
                }

            })
    }

    render() {
        return (
            <div>
                <div className="MessageThread">To: &nbsp;&nbsp; {this.state.messageContents.from}</div>
                <hr className="MessageThreadHR"></hr>
                <div className="MessageThread">Subject: &nbsp;&nbsp; {this.state.messageContents.subject}</div>
                <hr className="MessageThreadHR"></hr>
                <div className="MessageThread">{this.state.messageContents.text}</div>
                <div className="MTDivButtons">
                    <button className='btn btn-primary MessageThreadButtons'>Prev</button>
                    <button className='btn btn-primary MessageThreadButtons'>Next</button>
                </div>

            </div>
        );
    }
}

export default MessageThread;