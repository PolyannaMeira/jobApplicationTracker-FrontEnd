import { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './Agenda.css';
import Api from '../../Api';

const Agenda = () => {
    const [value, setValue] = useState(new Date());
    const [interviewJobs, setInterviewJobs] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => { 
      try {
        const jobs = await Api.getMyJobsList();
        const interviewJobs = jobs
          .filter(job => job.interviewDate)
          .map(job => ({
            companyName: job.companyName,
            interviewDate: new Date(job.interviewDate)
        })); 
    setInterviewJobs(interviewJobs);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const isInterviewDate = (date) => {
    return interviewJobs.some(
      (interviewJob) => interviewJob.interviewDate.toDateString() === date.toDateString()
    );
  };

  const handleNavigateHome = () => {
    navigate('/myjobs');
  }

  return (
    <div className='calendar-container'>
        <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date }) => {
          if (date.toDateString() === new Date().toDateString()) {
            return 'current-day';
          } if (isInterviewDate(date)) {
            return 'interview-day';
          }
          return null;
        }}
      />
       <div className="interview-list">
                <h3>Upcoming Interviews</h3>
                <ul>
                    {interviewJobs.length > 0 ? (
                        interviewJobs.map((job, index) => (
                            <li key={index}>
                                <span className='company-name'>{job.companyName}</span><span>{job.interviewDate.toLocaleDateString()}</span>
                            </li>
                        ))
                    ) : (
                        <li>No upcoming interviews</li>
                    )}
                </ul>
            </div>
      <button onClick={handleNavigateHome} className='navigate-btn'>
        Back to Home
      </button>
    </div>
  )
}

export default Agenda