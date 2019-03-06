import React, { Component } from 'react';
class Create extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="ToCreate">To: &nbsp; &nbsp; &nbsp;
                    <input className="ToCreateInput" type='text'></input>
                </div>
                <hr className="MessageThreadHR"></hr>
                <div className="CreateSubject">Subject: &nbsp; &nbsp; &nbsp;
                    <input className="CreateSubjectInput" type='text'></input>
                </div>
                <hr className="MessageThreadHR"></hr>
                <textarea className="TextAreaCreate" rows="4" cols="50" placeholder=" Type your message here"></textarea>
                <button className='btn btn-primary CreateButton'>Send</button>
            </div>
        );
    }
}

export default Create;