import React,{Component} from 'react';

const url = "http://localhost:5100/api/auth/Login";

class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            email:'nidhi@gmail.com',
            password:"12345678",
            message:''
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
        .then((res) => res.json())
        .then((data) =>{
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/profile')
            }
        })
        
        
    }

    render(){
        return(   
        <>
            <div className="container">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Login</h3>      
                    </div>
                
                <div className='panel-body'>
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            <div className='row'>
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
                            <button className='btn btn-info'
                            onClick={this.handelCheckOut}>
                                Login
                            </button>
                    </div>
                </div>
            </div>
        </>
        )     
    }

}

export default Login;