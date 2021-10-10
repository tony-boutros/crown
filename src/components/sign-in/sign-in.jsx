import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            passord:""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:'', password:''});
    };
    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]:value});
    };
 
 
 
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                 
                    <FormInput name="email" type="email" label="email" value={this.state.email} required handleChange={this.handleChange} />
               
                    <FormInput name="password" type="password"  value={this.state.password} required handleChange={this.handleChange} />
                  
                    <CustomButton type="ssubmit">Sign in</CustomButton>
                </form>
                
            </div>
        )
    }
}
export default SignIn;
