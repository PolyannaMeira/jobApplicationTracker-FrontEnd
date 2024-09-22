import { useState } from "react";
import "./JobProfileForm.css";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";

const JobProfileForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    jobRole: "",
    salaryRange: "",
    jobUrl: "",
    date: "",
    location: "",
    status: "",
    attachment: null,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    try {
      await Api.createJobProfile(dataToSend);
      alert("Job created successfully!");
    } catch (error) {
      alert(`Failed to create job: ${error.message}`);
    }
  };

  const navigate = useNavigate(); // Hook for navigation

  const handleCancel = () => {
    navigate("/myjobs");
  };

  return (
    <div className="job-profile-form-container">
      <form className="job-profile-form" onSubmit={handleSubmit}>
        <h2>Create a Job Profile</h2>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Job Role</label>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            placeholder="Job Role"
            required
          />
        </div>

        <div className="form-group">
          <label>Salary Range</label>
          <input
            type="text"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            placeholder="Salary Range"
          />
        </div>

        <div className="form-group">
          <label>Job URL</label>
          <input
            type="url"
            name="jobUrl"
            value={formData.jobUrl}
            onChange={handleChange}
            placeholder="Job URL"
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        <div className="form-group">
          <label>Attachment</label>
          <input type="file" name="attachment" onChange={handleFileChange} />
        </div>

        <div className="form-group">
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes"
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-create">
            Create
          </button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobProfileForm;
