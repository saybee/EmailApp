import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// var data = require('../data/data');

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messagebox: [],
            userid: '',
        }
    }
    state = {}
    componentDidMount() {
        if (localStorage.getItem("UserToken")) {
            var userid = localStorage.getItem("UserToken")
        }
        // 


        axios.get(`http://5c5a21f9af3ff700140de477.mockapi.io/api/email`)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        messagebox: response.data
                    })
                }

            })
    }

    render() {


        let details = this.state.messagebox.map((inbox, i) => {
            return (
                <div class="landingpg-containernew">
                    <div key={i} className="jumbotron vertical-center messaging-getmymsgs">
                        <Link to={`/messaging/thread/${inbox.id}`} className="MessageFont">
                            <table className="MessageTable">
                                <td></td>
                                <td className="SenderName"><td><input type="checkbox" className="MessageCheckBox" name="message"></input>&nbsp;&nbsp;&nbsp;{inbox.from}</td></td>
                                <td className="MessageSubject">{inbox.subject}</td>
                            </table>
                        </Link>
                    </div>
                </div >
            )
        })

        return (<div>
            {/* <div className='messaging-main-div'>
                <div className='messaging-leftborder'> 
            <h4>Messaging</h4>
            <span className='glyphicon glyphicon-pencil messaging-glyph-pencil'></span>
            <hr className='messaging-hr'></hr>
            */}
            {details}

            {/* </div>
            </div> */}

        </div >);
    }
}

export default Message;