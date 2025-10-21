// This file centralizes all communication with the backend server.

// The URL of the backend server. In a real production environment,
// this would come from an environment variable.
const API_URL = 'http://localhost:3001/api/content';

/**
 * Fetches the entire website content from the backend.
 * @returns {Promise<any>} A promise that resolves with the content object.
 * @throws {Error} Throws an error if the network request fails.
 */
export const fetchContent = async (): Promise<any> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Error (fetchContent):", error);
    throw error; // Re-throw to be handled by the caller
  }
};

/**
 * Saves the entire website content to the backend.
 * @param {any} content - The complete content object to be saved.
 * @param {string} password - The admin password for authentication.
 * @returns {Promise<any>} A promise that resolves with the server's success message.
 * @throws {Error} Throws an error if the network request fails.
 */
export const saveContent = async (content: any, password: string): Promise<any> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': password, // Simple authentication
      },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
       const errorData = await response.json();
      throw new Error(errorData.error || `Failed to save content: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error (saveContent):", error);
    throw error; // Re-throw to be handled by the caller
  }
};
