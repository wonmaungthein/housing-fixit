import React from 'react';
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";


export class LoginPage extends Component {
    render() {
        return (
          <div>
            <form>
            <div>
            <type color="info">Login</type>
            </div>
            <br/>
              <p>
                <label>User Name</label>
                <input type="UserName" id="t2" name="UserName" />
              </p>
              <p>
                <label>Password</label>
                <input type="Password" id="t2" name="Password" />
              </p>
              <div>
              <p>
              <Button color="success"><Link to="/Tenant">  Submit  </Link></Button>
             </p>
            </div>
              <br/>
              <p>Not registered yet, Register Now</p>
              <br/>
              <div>
                 <p>
                 <Button color="success"><Link to="/RegisterPage">  Register!  </Link></Button>
                </p>
               </div>
            </form>
          </div>
        );
      }
    }
        export default LoginPage;
   