import React, { useState } from 'react';
import './SignInPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullName, 'Email:', email, 'Age:', age, 'Sex:', sex);
    // Add your authentication logic here
  };

  return (
    <div class="container-fluid">
      <div class="container mb-2">
        <div class="row ms-5">
          <div class="col-12">
            <p class="sign-up fw-bold">Sign Up</p>
          </div>
          <div class="col">
            <p class="sign-in-text">Please enter your fullname and email to log in and access your CBC test results</p>
            <p class="sign-in-text"> and personalized health recommendations. </p>
          </div>
        </div>
      </div>

      <div class="container">
        <form onSubmit={handleSubmit}>

          <div class="row row-cols-2 mt-1 ms-5 g-5 position-relative">
            <div class="col-6 col-sm-5 col-md-4 col-lg-3">
              <input type="text" class="form-control rounded-5 p-3" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} required />
            </div>

            <div class="col-4 col-sm-3 col-md-2">
              <input type="number" class="form-control rounded-5 p-3" placeholder="Age:" value={age} min="0" onChange={handleAgeChange} required />
            </div>
          </div>

          <div class="row row-cols-2 mt-1 ms-5 g-5">
            <div class="col-6 col-sm-5 col-md-4 col-lg-3">
              <input type="email" class="form-control rounded-5 p-3" placeholder="Email" value={email} onChange={handleEmailChange} required />
            </div>

            <div class="col-4 col-sm-3 col-md-2">
              <select class="form-select rounded-5 p-3" value={sex} placeholder="Sex: " onChange={handleSexChange} required>
                <option value="" selected disabled>Sex: </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div class="row justify-content-center mt-5">
            <div class="col-9 col-md-10 col-lg-11">
              <button type="submit" class="sign-in-btn border border-0 rounded-5 py-3 fs-1">Submit
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
