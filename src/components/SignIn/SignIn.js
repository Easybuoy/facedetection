import React, { Component } from 'react';
// import Error from '../Error/Error';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            responsestatus: '',
            div: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        let responsestatus = '';
        console.log(this.state);
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(res =>{
            responsestatus = res.status;
            console.log(responsestatus);
            if(responsestatus === 200){
                return res.json()
             }else{ 
                // <Error/>

                //  this.error();
                // <Error
                // model="user"
                // messages={{
                //  passwordsMatch: 'Passwords do not match.',
                // }} />

                // () => <Error />
                console.log('error')
             }
            })
        .then(user => {
            if(user._id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        .catch((err) => {
            // <div>
            // {this.triggerError()}
            // </div>
            // <Error />
            console.log(err)
        })
        
    }

    render() {
        const {onRouteChange} = this.props;
        
        return (
            <div>
            {/* <Error/> */}
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
           <main className="pa4 black-80">
               <div className="measure">
                <fieldset id="signup" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0"> Sign In </legend>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email </label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email-address" onChange = {this.onEmailChange} required="required"/>
                </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password </label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange = {this.onPasswordChange}/>
                </div>
                {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" />Remember Me </label> */}
                </fieldset>
                <div className="">
                <input onClick= {this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Login" />
                </div>
                <div className="lh-copy mt3">
                <p  onClick= {() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                {/* <a href="#0" className="f6 link dim black db">Forgot Password</a> */}
                </div>
    
               </div>
            </main>
            </article>
            </div>
        );
    }
}

export default SignIn;