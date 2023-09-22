const getTopRatedMovies = async () => {
    try {
      const moviesURL = import.meta.env.VITE_API;
      const apiToken = import.meta.env.VITE_API_TOKEN;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };
  
      const response = await fetch(moviesURL, options);
  
      const data = await response.json();
      return data; 
  
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };
  
  export default getTopRatedMovies;
