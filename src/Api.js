const url = import.meta.env.VITE_APP_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
};

const Api = {
  // 🔐 LOGIN
  getLogin: async (email, password) => {
    

    const response = await fetch(url + 'users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Login failed');
    return data;
  },
  
  registerUser: async (email, password, confirmPassword, firstName, lastName) => {
  const response = await fetch(url + "users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, confirmPassword, firstName, lastName }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
},

updateUserDetails: async (formData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(url + "users/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  return response.json();
}
,

getUserProfile: async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(url+ "users/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return response.json();
},
changePassword: async (currentPassword, newPassword, confirmPassword) => {
  const response = await fetch(url+ "users/change-password", {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message ||"Error changing password. ");
  return data;
},


  // 🔐 GET all jobs (only for logged-in user)
  getMyJobsList: async () => {
    const response = await fetch(url + 'jobs/jobs', {
      headers: getAuthHeaders(),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch jobs');
    return data;
  },

  // 🔐 GET job details
  getMyJobsDetails: async (id) => {
    const response = await fetch(url + `jobs/job/${id}`, {
      headers: getAuthHeaders(),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch job');
    return data;
  },

  // 🔐 CREATE job
  createJobProfile: async (jobData) => {
    const response = await fetch(url + 'jobs/job', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(jobData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to create job');
    return data;
  },

  // 🔐 UPDATE job
  updateJob: async (id, jobData) => {
    const response = await fetch(url + `jobs/job/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(jobData),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to update job');
    return data;
  },

  // 🔐 DELETE job
  deleteJobDetails: async (id) => {
    const response = await fetch(url + `job/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to delete job');
    return data;
  },

  // 🔐 SEARCH jobs
  searchJobs: async (query) => {
    const response = await fetch(url + `jobs/search?query=${encodeURIComponent(query)}`, {
      headers: getAuthHeaders(),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to search jobs');
    return data;
  },
};

export default Api;
