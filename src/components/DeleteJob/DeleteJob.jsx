import './DeleteJobs.css';
import PropTypes from 'prop-types'

const DeleteJob = () => {
  return (
    <div className='delete-container'>
        <div>Are you sure you want to delete this job ? This action cannot be undone.</div>
        <button className='delete-cancel-btn'>Cancel</button>
        <button className='delete-confirm-btn'>Delete</button>
    </div>
  )
}

DeleteJob.propTypes = {
    job_id: PropTypes.string.isRequired
}

export default DeleteJob