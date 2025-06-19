import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Api from '../../Api/';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Novo estado
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    return alert("Passwords do not match!");
  }

  try {
    await Api.registerUser(
      formData.email,
      formData.password,
      formData.confirmPassword
    );
    alert("User registered successfully!");
    navigate('/');
  } catch (error) {
    alert("Registration error: " + error.message);
  }
};

  const handleNavigateHome = () => {
    navigate('/');
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); 
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev); 
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <span onClick={togglePasswordVisibility} className="password-toggle-icon">
            {showPassword ? <FaEyeSlash /> : <FaEye />} 
          </span>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          <span onClick={toggleConfirmPasswordVisibility} className="password-toggle-icon">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} 
          </span>
        </div>
        <button type="submit">Register</button>
        <button onClick={handleNavigateHome} className='navigate-button'>
          Back to login
        </button>
      </form>
    </div>
  );
};

export default SignUp;