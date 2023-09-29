const getTopRated = async () => {
    try {

      const topRatedURL = import.meta.env.VITE_TOP_RATED;
      const apiToken = import.meta.env.VITE_API_TOKEN;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };
  
      const response = await fetch(topRatedURL, options);
      const data = await response.json();
      return data; 
      
  
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };
  
  export default getTopRated;
