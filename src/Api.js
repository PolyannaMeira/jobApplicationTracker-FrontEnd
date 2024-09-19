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

  deleteJobDetails: async (id) => {
    const response = await fetch(url + `job/${id}`, {
      method: 'DELETE', 
    });
    return response.json();
  },
};

export default Api;
