import './JobsPage.css';
import Api from '../Api';
import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Search from './Search/Search';
import PlusButton from './PlusButton/PlusButton';
import Navbar from './NavBar/NavBar';
import { useNavigate } from 'react-router-dom';


const jobsList = [];

const JobsPage = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
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

  return (
    <>
      <Navbar/>
      <Search data={jobsList} />
      <Sort />
      <Filter selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
      <h2>Jobs</h2>
      <div>
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
        <PlusButton/>
      </div>
      <div>
    </div>
    </>
  );
};

export default JobsPage;
