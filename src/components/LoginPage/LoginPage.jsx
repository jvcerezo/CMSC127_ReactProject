import React, { useState } from 'react';

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
      <div className="login-header">
        <p>Welcome to Labtica!</p>
      </div>
      <div className="login-description">
        <p>Please log in to access your CBC test results and personalized health recommendations. Our secure platform ensures your privacy and confidentiality.</p>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Username or Email" value={email} onChange={handleEmailChange} />
          <div className="form-group">
            <div className="sign-in-btn-container">
                <button type="submit" className="sign-in-btn">Sign In</button>
            </div>
                <div className="no-account">
                    <span>Don't have an account yet?</span>
                    <a href='' className="create-account-link">Create Account</a>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;