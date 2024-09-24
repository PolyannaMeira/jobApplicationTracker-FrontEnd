import { useState,useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Agenda.css';
import Api from '../../Api';

const Agenda = () => {
    const [value, setValue] = useState(new Date());
    const [interviewDates, setInterviewDates] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await Api.getMyJobsList();
        const dates = jobs
          .filter(job => job.interviewDate)  // Only jobs with an interview date
          .map(job => new Date(job.interviewDate));  // Convert to Date object
        setInterviewDates(dates);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const isInterviewDate = (date) => {
    return interviewDates.some(
      (interviewDate) => interviewDate.toDateString() === date.toDateString()
    );
  };

  return (
    <div>
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
    </div>
  )
}

export default Agenda