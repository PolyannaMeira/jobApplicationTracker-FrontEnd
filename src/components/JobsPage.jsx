import './JobsPage.css';
import Api from '../Api';
import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Search from './Search/Search';
import PlusButton from './PlusButton/PlusButton';
import Navbar from './NavBar/NavBar';


const jobsList = [
  'Meta',
  'Apple',
  'Tesla',
  'Microsoft',
  'Nvidia',
  // Add more job titles here
];
const JobsPage = () => {
  const [myJobs, setMyJobs] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');


  useEffect(() => {
    Api.getMyJobsList().then((data) => setMyJobs(data));
  }, []);


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
                <a href={j.link}>Go to application page</a>
              </span>
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
