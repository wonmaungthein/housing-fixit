import React from 'react';
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";



export class RegisterPage extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                    <div>
                        <p>
                        <label>First Name</label>
                        <input type="text" className="form-control" name="firstName" />
                        </p>
                    </div>
                    <div>
                        <p>
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lastName" /> 
                        </p>                   
                    </div>
                    <div>
                        <p>
                        <label>Username</label>
                        <input type="" className="form-control" name="" />
                        </p>
                    </div>
                    <div>
                        <p>
                        <label>Password</label>
                        <input type="" className="form-control" name="" />    
                        </p>
                     <div/>
                    <div>
                        <p>
                        <Link to="/loginPage">Cancel</Link>
                        </p>
                        <p>
                        <Link to="/FeedBack">Enter</Link>
                        </p>
                    </div>
             </div>
         </div>
        );
    }
}
 export default RegisterPage;