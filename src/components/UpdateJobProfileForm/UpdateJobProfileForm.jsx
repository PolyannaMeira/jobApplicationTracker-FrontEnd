import  { useState } from "react";
import  { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Api"
import "./UpdateJobProfileForm.css";

const UpdateJobProfileForm = (jobData) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    
    companyName: "",
    jobRole: "",
    salaryRange: "",
    jobUrl: "",
    interviewDate: "",
    location: "",
    status: "",
    attachment: null,
    notes: "",
  });

  const [loading, setLoading] = useState(true);

  // Pre-fill the form with the job data passed from the parent component
  useEffect(() => {
    
    const fetchJobDetails = async () => {
      try {
        const jobDetails = await api.getMyJobsDetails(id); 
        setFormData({
          companyName: jobDetails.companyName || "",
          jobRole: jobDetails.jobTitle || "",
          salaryRange: jobDetails.salaryRange || "",
          jobUrl: jobDetails.jobUrl || "",
          interviewDate: jobDetails.interviewDate || "",
          location: jobDetails.location || "",
          status: jobDetails.status || "",
          attachment: null,
          notes: jobDetails.notes || "",
        });
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching job details:", error);
        setLoading(false);
      }
    };

    
    fetchJobDetails();
  }, [id]);


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
    
      
      const formDataToSend = new FormData();
      formDataToSend.append("companyName", formData.companyName);
      formDataToSend.append("interviewDate", formData.date); 
      formDataToSend.append("jobRole", formData.jobRole);
      formDataToSend.append("interviewDate", formData.interviewDate);
      formDataToSend.append("salary", formData.salary);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("jobUrl", formData.jobUrl);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("notes", formData.notes);
    
      
      if (formData.attachment) {
        formDataToSend.append("attachment", formData.attachment);
      }
    
      try {
       
        const response = await api.updateJob(jobData.id, formDataToSend); 
        console.log("Job updated successfully:", response);
        
        
        navigate("/myjobs"); 
      } catch (error) {
        console.error("Error updating job:", error);
      }
    };
    
 

  const navigate = useNavigate(); // Hook for navigation

  const handleCancel = () => {
    navigate("/myjobs"); 
  };

  if (loading) {
    return <div>Loading...</div>; 
  }


  return (
    <div className="update-job-profile-form-container">
      <form className="update-job-profile-form" onSubmit={handleSubmit}>
        <h2>Update</h2>

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
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Salary"
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
            type="interviewDate"
            name="interviewDate"
            value={formData.interviewDate.split('T')[0]} 
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
          <button type="submit" className="btn-save">
            Save
          </button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJobProfileForm;
