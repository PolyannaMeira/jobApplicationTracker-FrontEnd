import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountDetails.css";

const AccountDetails = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // Hook for navigation

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Account Details:", formData);
    
    /*try {
        const response = await fetch(`http://localhost:5000/api/account-details/${userId}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(formData), 
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log('Account details updated:', data);
          
          navigate("/myjobs");
        } else {
          console.error('Failed to update account details');
        }
      } catch (error) {
        console.error('An error occurred while updating account details:', error);
      }
    };*/
    navigate("/myjobs"); 
  };    
  

  // Função de cancelamento
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
    navigate("/myjobs");
  };

  return (
    <div className="account-details-container">
      <h2>Account Details</h2>
      <form className="account-details-form" onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-update">Update</button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
