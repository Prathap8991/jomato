import React,{Component} from 'react';

const url = "http://localhost:5100/api/auth/register";

class Register extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            name:'Nikita',
            email:'niki@gmail.com',
            phone:'987654321',
            password:"12345678"
        }
    }
    
    handelChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handelCheckOut = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
        
    }

    render(){
        return(   
        <>
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Register</h3>      
                    </div>
                
                <div className='panel-body'>
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label>Name</label>
                                    <input className='form-control' name='name' value={this.state.name}
                                    onChange={this.handelChange}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Phone</label>
                                    <input className='form-control' name='phone' value={this.state.phone}
                                    onChange={this.handelChange}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Email</label>
                                    <input className='form-control' name='email' value={this.state.email}
                                    onChange={this.handelChange}/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Password</label>
                                    <input className='form-control' name='password' value={this.state.password}
                                    onChange={this.handelChange}/>
                                </div>
                            </div>
                            <button className='btn btn-success'
                            onClick={this.handelCheckOut}>
                                Register
                            </button>
                    </div>
                </div>
            </div>
        </>
        )     
    }

}

export default Register;