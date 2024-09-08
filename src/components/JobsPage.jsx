import './JobsPage.css'
import Api from '../Api'
import { useEffect, useState } from 'react';

const JobsPage = () => {
  const [myJobs, setMyJobs] = useState([])
  useEffect(()=> {
    Api.getMyJobsList().then((data) => setMyJobs(data))
  }, [])
  return (
    <>
    <div>
      <ul className='jobList'>
        {
          myJobs.map(j => (
            <li className='jobItem' key={j.id}>
              <span className='companyName'>
                {j.companyName}
              </span> 
            <span>
            {j.jobTitle} 
            </span>
            <span className='jobLink'>
              <a href={j.link}>Go to application page</a>
              </span>
              </li>
          ))
        }
      </ul>
    </div>
    </>
  )
}

export default JobsPage