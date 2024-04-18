// utils.ts
export const fetchData = async (urlParams: string = '') => {
    const baseUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'Pt4lvp9GiaSv02dvbMe4RR1ZnCXQW9XLVv8knBef';
  
    try {
      const response = await fetch(
        `${baseUrl}?api_key=${apiKey}${urlParams}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };