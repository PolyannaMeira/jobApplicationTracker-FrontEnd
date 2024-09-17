import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from "../../Api";
import "./JobDetails.css";
import NavBar from "../NavBar/NavBar"

const JobDetails = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState(null); // State to hold job details
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to handle errors

  // Fetch job details when the component mounts
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const data = await Api.getMyJobsDetails(id); // Use API method with job ID
        setJob(data);
      } catch (error) {
        setError('Failed to fetch job details');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchJobDetails();
  }, [id]); // Dependency array with 'id' to re-run the effect when the ID changes

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if there was an error fetching data
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display job details if data is fetched successfully
  return (
      
    <div className="job-details">
      <NavBar/>
      <h2 className="title">Job Details</h2>
      <div className="job-details-container">
      <p ><strong>Company Name:</strong> {job.companyName}</p>
      <p ><strong>Interview Date:</strong> {job.interviewDate}</p>
      <p ><strong>Job Role:</strong> {job.jobRole}</p>
      <p ><strong>Salary:</strong> {job.salary}</p>
      <p ><strong>Status:</strong> {job.status}</p>
      <p ><strong>Attachment:</strong> {job.attachment}</p>
      <p ><strong>Job URL:</strong> <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">{job.jobUrl}</a></p>
      <p ><strong>Location:</strong> {job.location}</p>
      <p ><strong>Notes:</strong> {job.notes}</p>
      </div>
    </div>
  );
};

export default JobDetails;
