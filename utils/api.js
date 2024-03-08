  export const getModels = async () => {
  try {
    const response = await fetch('https://deepaksilaych.github.io/Fake_JSON_Testing_API/api1.json');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
};

export const getModelById = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/models/${id}`);
    // working api not available
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching model by id:', error);
    return null;
  }
  return data[id]
};

export const getFeaturedModels = async () => {
  try {
    // Fetch featured models data from API
    const response = await fetch('https://deepaksilaych.github.io/Fake_JSON_Testing_API/api2.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching featured models:', error);
    return [];
  }
}