
export const getFromUrl = async(url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result =  await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  