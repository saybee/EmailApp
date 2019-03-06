import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router';

class ListCreate extends Component {
    constructor(props){

        super(props)
        this.state = {
            redirectVar:""
        }
        
        this.onSubmitCreate=this.onSubmitCreate.bind(this)
        this.onSubmitList=this.onSubmitList.bind(this)
    }


    onSubmitCreate(event) {
        this.setState({
            redirectVar: <Redirect to= "/create"/>
        })

    }

    onSubmitList(event){
        this.setState({
            redirectVar: <Redirect to= "/message"/>
        })
    }

    render() {
        return (
            <div>
                {this.state.redirectVar}
                <button className='btn btn-primary ListButton' onClick={this.onSubmitList}>List</button>
                <button className='btn btn-primary ListButton' onClick={this.onSubmitCreate}>Create</button>
            </div>
        );
    }
}

export default ListCreate;