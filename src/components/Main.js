import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Message from './Message/Message'
import MessageThread from './MessageThread/MessageThread';
import ListCreate from './ListCreate/ListCreate';
import Create from './Create/Create';

//Set Token after Authentication
//Get User ID from the Authenticated User which I am assuming to be stored in Local Storage
//Based on User ID find the 
localStorage.setItem('UserToken', 1);

class Main extends Component {
    state = {}
    render() {
        return (
            <div>
                <Route path="/" component={ListCreate} />
                <Route path="/message" component={Message} />
                <Route path="/messaging/thread/" component={MessageThread} />
                <Route path="/create" component={Create} />

            </div>
        );
    }
}

export default Main;