// This is fixed, we'll see later how to update it.
const url = "http://localhost:5000/";

const Api = {
  getRecipes: async () => {
    const response = await fetch(url + "recipes");
    return response.json();
  },
  getMyJobsList: async () => {
    const response = await fetch(url + "myjobs");
    return response.json();
  },
  getMyJobsDetails: async (id) => {
    const response = await fetch(url + `myjobs/:${id}`);
    return response.json()
  }
};

export default Api;
