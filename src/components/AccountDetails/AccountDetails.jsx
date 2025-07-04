
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../Api";
import "./AccountDetails.css";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
   useEffect(() => {
  const fetchUserProfile = async () => {
    try {
      const user = await API.getUserProfile();
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        password: "", 
      });
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  fetchUserProfile();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const response = await API.updateUserDetails(formData);

    
    if (response && response.success) {
      console.log("Updated:", response);
      navigate("/myjobs");
    } else {
      alert("Failed to update account details");
    }
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    alert("Erro ao atualizar os dados");
  }
};

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    navigate("/myjobs");
  };

  const handleChangePassword = () => {
    navigate("/change-password");
  };

 

  return (
    <div className="account-details-container">
      <h2>Account Details</h2>
      <form className="account-details-form" onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
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
          <button type="button" className="btn-change-password" onClick={handleChangePassword}>Change Password</button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
