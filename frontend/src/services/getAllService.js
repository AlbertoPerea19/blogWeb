const BASE_URL = "http://localhost:4000";

export const getAllEntries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/entry`);
    if (!response.ok) {
      throw new Error('Failed to fetch entries');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
};
