import { API_URL } from '@/utils/utils';

export const getAPI = async (path: string, id: string) => {
  try {
    const response = await fetch(API_URL + path + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching data:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
    throw error;
  }
};

export const postAPI = async (path: string, object: Object) => {
  try {

    await fetch(API_URL + path, {
      body: JSON.stringify(object),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    message.value = 'Word Stem added successfully!';
    close();
  } catch (error) {
    message.value = 'There was an error adding the Word Stem.';
    console.error(error);
  }
};
