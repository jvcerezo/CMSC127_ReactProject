import React, { useState } from 'react';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgGoogle } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  return (
    <div class="container-fluid">
      <p class="welcome">Welcome to LabTICA!</p>
      <p class="login-description">Please log in to proceed to your CBC test results and personalized health</p>
      <p class="login-description">recommendations. Our secure platform ensures your privacy and confidentiality.</p>

      <div class="row">
        <div class="col d-flex justify-content-center">
          <button class="btn-login border border-0 rounded-5">
            <CgGoogle />Continue with Google</button>
        </div>
      </div>

      <div class="row mt-4"></div>
      <div class="col d-flex justify-content-center">
        <hr class="line1 border border-1 opacity-100" />
        <p class="or mx-3">Or</p>
        <hr class="line1 border border-1 opacity-100" />
      </div>


      <div class="row mt-2">
        <div class="col d-flex justify-content-center">
          <button class="btn-signup border border-0 rounded-5" onClick={() => {
            navigate('/signin');
          }}>
            Sign Up
            <div class="arrow-wrapper">
              <div class="arrow"></div>
            </div>
          </button>
        </div>
      </div>

      <div class="signup-link mt-4">
        <p>Don't have an account yet?</p>
      </div>

    </div>
  );
};

export default LoginPage;
