import React, { useState } from 'react';
import './LoginPage.css';
import { CgGoogle } from 'react-icons/cg';

const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
      return (
        <div className="login-page">
          <div className="login-form">
            <p className="welcome">Welcome to LabTICA!</p>
            <p className="login-description">Please log in to proceed to your CBC test results and personalized health recommendations. Our secure platform ensures your privacy and confidentiality.</p>
            <button className="btn-login">
                  <CgGoogle />Continue with Google
            </button>
            <div className="or-wrapper">
              <hr className="line1" />
              <p className="or">Or</p>
              <hr className="line2" />
            </div>
              <button className="btn-signup">
              Sign in
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
                </button>
            </div>
            <div className="signup-link">
              <p>Don't have an account yet?</p>
            </div>
          </div>
      );
};

export default LoginPage;