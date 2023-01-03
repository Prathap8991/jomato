import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "http://localhost:5100/api/auth/userinfo";

class Profile extends Component{
    constructor(props){
        super(props)

        this.state={
            users:''
            
        }
    }

    handelLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('rtk');
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.users.role){
            if(this.state.users.role === "Admin"){
                return(
                    <link to="/users" className="btn btn-success">
                        Users
                    </link>
                )
            }
    
        }

    }
    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.users.role)
        return(
            <>
                <div className='container'>
                    <div className='panel panel-danger'>
                        <div className='panel-heading'>
                            <h3>Profile</h3>    
                        </div>    
                        
                    
                    <div className='panel-body'>
                        <h1>Hi {this.state.users.name}</h1>
                        <h2>Your email id is {this.state.users.email}</h2>
                        <h2>Your phone is {this.state.users.phone}</h2>
                        <h2>Your role is {this.state.users.role}</h2>
                        {this.conditionalRender()} &nbsp;
                        <button type="button" className='btn btn-danger'
                        onClick={this.handleLogout}>
                            Logout
                        </button>
                    </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({users:data})
        })
    }
}

export default Profile;