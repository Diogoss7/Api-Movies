const getPersons = async () => {
    try {

      const SeriesURL = import.meta.env.VITE_PERSONS;
      const apiToken = import.meta.env.VITE_API_TOKEN;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };
  
      const response = await fetch(SeriesURL, options);
      const data = await response.json();
      return data; 
      
  
    } catch (err) {
      console.error(err);
      throw err; 
    }
  };
  
  export default getPersons;
