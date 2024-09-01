// This is fixed, we'll see later how to update it.
const url = "http://localhost:5000/";

const Api = {
  getRecipes: async () => {
    const response = await fetch(url + "recipes");
    return response.json();
  },
};

export default Api;
