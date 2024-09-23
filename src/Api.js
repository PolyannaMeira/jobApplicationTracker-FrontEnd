// This is fixed, we'll see later how to update it.
const url = "http://localhost:5000/";

const Api = {
  getMyJobsList: async () => {
    const response = await fetch(url + "jobs");
    return response.json();
  },

  getMyJobsDetails: async (id) => {
    const response = await fetch(url + `job/${id}`);
    return response.json();
  },

  createJobProfile: async (formData) => {
    const response = await fetch(url + "job", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData) ,
    });
    console.log(JSON.stringify(formData))
    return response.json();
  },

  deleteJobDetails: async (id) => {
    const response = await fetch(url + `job/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
  searchJobs: async (query) => {
    const response = await fetch(url + `jobs/search?query=${query}`);
    if (!response.ok) throw new Error("Failed to fetch search results");
    return response.json();
  },
};

export default Api;
