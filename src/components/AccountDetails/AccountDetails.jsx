import { useState } from "react";
import "./AccountDetails.css";

const AccountDetails = () => {
  // State para gerenciar os inputs do formulário
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função de atualização do formulário (exemplo de lógica)
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Account Details:", formData);
    // Lógica de atualização vai aqui
  };

  // Função de cancelamento
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
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
