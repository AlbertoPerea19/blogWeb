const BASE_URL = "http://localhost:4000";

export const getEntryById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/entry/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch entry by ID');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching entry by ID:', error);
    throw error;
  }
};
