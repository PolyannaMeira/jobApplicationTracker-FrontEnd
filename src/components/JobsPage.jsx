import './JobsPage.css';
import Api from '../Api';
import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Search from './Search/Search';
import PlusButton from './PlusButton/PlusButton';
import Navbar from './NavBar/NavBar';
import JobProfileForm from './JobProfileForm/JobProfileForm';
import UpdateJobProfileForm from './UpdateJobProfileForm/UpdateJobProfileForm';
import { useNavigate } from 'react-router-dom';


// const jobsList = [];

const JobsPage = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);  // Controls the display of the creation form
  const [showUpdateForm, setShowUpdateForm] = useState(false);  // Controls the display of the update form
  const [jobToUpdate, setJobToUpdate] = useState(null); //Stores the job data to be updated
  const navigate = useNavigate()

  useEffect(() => {
    Api.getMyJobsList().then((data) => setMyJobs(data));
  }, []);
  
  const transferHandler = (data) => {
    navigate(`/myjob/${data}`, { replace: true });
  }

  const getDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return day + 'th'; // covers 11th to 20th
    switch (day % 10) {
      case 1: return day + 'st';
      case 2: return day + 'nd';
      case 3: return day + 'rd';
      default: return day + 'th';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = getDayWithSuffix(date.getDate());
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Function to open the create form
  const handleShowCreateForm = () => {
    setShowCreateForm(true);
    setShowUpdateForm(false); // Ensure the update form is closed
  };

  

  // Function to close any form
  const handleCloseForm = () => {
    setShowCreateForm(false);
    setShowUpdateForm(false);
    setJobToUpdate(null);
  };


  return (
    <>
      <Navbar/>
      <Search/>
      <Sort/>
      <Filter selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />

      <>
        <ul className='jobList'>
          {myJobs.map((j) => (
            <li className='jobItem' key={j.id}>
              <span className='companyName'>{j.companyName}</span>
              <span>{j.jobTitle}</span>
              <span className='jobLink'>
                <button className="button-link" onClick={()=>transferHandler(j.id)}>Go to job details</button>
              </span>
              {j.interviewDate ? (
                <span className='interviewDate'>interview on {formatDate(j.interviewDate)}</span>
              ) : (
                <span>interview not scheduled</span>
              )}
            </li>
          ))}
        </ul>
        <PlusButton onClick={handleShowCreateForm} /> {/* Button to open the create form */}

        {/* Render the create form when `showCreateForm` is true */}
        {showCreateForm && <JobProfileForm onClose={handleCloseForm} />}
        
        {/* Render the update form when `showUpdateForm` is true */}
        {showUpdateForm && <UpdateJobProfileForm jobData={jobToUpdate} onClose={handleCloseForm} />}
      </>
    </>
  );
};

export default JobsPage;
