// This is fixed, we'll see later how to update it.
const url = "http://localhost:5000/";

const Api = {
  getMyJobsList: async () => {
    const response = await fetch(url + "jobs");
    return response.json();
  },
  getMyJobsDetails: async (id) => {
    const response = await fetch(url + `jobs/:${id}`);
    return response.json();
  },
};

export default Api;
