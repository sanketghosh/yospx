import { API_BASE_URL } from "@/constants";

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/posts`);

    if (!response.ok) {
      throw new Error("ERROR: Something is wrong, failed to fetch posts.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ERROR: Failed to fetch posts");
    throw error;
  }
};
