import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    /*if (email === "user@example.com" && password === "password123") {
        
        navigate('/myjobs');
      } else {
        
        alert("Email ou senha incorretos");
      }
    };*/
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Job Application Tracker</h2>
        
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email" className="login-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <label htmlFor="password" className="login-label">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-button">Log in</button>
        </form>

        <div className="login-footer">
          <a href="#" className="login-reset">Reset password</a>
          <p className="login-text">
            Don't have an account? <Link to="/signup" className="login-signUp">Sign up</Link> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
