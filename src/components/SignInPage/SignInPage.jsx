import React, { useState } from 'react';
import './SignInPage.css';

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
    <div className="sign-in-page">
    <div className="sign-in-form">
        <p className="sign-in-text">Sign Up</p>
        <p className="sign-in-description1">Please enter your fullname and email to log in and access your CBC test results</p> 
        <p className="sign-in-description2"> and personalized health recommendations. </p>
    <form onSubmit={handleSubmit}>
      <label>
        <div className="input-box-fullname">
        <input type="text" class="fullname__input"placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
        </div>
      </label>
      <label>
        <div className="input-box-email">
        <input type="email" className="email__input" placeholder="Email"value={email} onChange={handleEmailChange} />
        </div>
      </label>
      <label>
        <div className="input-box-age">
        <input type="number" className="age__input" placeholder="Age:"value={age} onChange={handleAgeChange} />
        </div>
      </label>
      <label>
      <div className="input-box-sex">
        <select value={sex} className="sex__input" placeholder="Sex: "onChange={handleSexChange}>
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        </div>
      </label>
      <button type="submit" className="sign-in-btn">Submit
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
      </button>
    </form>
    </div>
    </div>
  );
};

export default SignIn;
