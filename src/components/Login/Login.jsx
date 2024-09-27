import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';


import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [error] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
        
      navigate('/myjobs');
    } else {
      
      alert("Email ou password wrong");
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Alterna entre mostrar e esconder a senha
  };
  
    

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Job Application Tracker</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email" className="login-label">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />

          <label htmlFor="password" className="login-label">Password</label>
          <div className="password-input-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <span onClick={togglePasswordVisibility} className="password-toggle-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </span>
            </div>

          <button type="submit" className="login-button">Log in</button>
        </form>

        <div className="login-footer">
          <a href="#" className="login-reset">Reset password</a>
          <p className="login-text">
            Do not have an account? <Link to="/signup" className="login-signUp">Sign up</Link> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
