const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiClient = {
  get: async (endpoint: string) => {
    try {
      // Ensure base URL and endpoint are properly joined with a slash
      const baseUrl = API_BASE_URL?.endsWith('/')
        ? API_BASE_URL
        : `${API_BASE_URL}/`;
      const cleanEndpoint = endpoint.startsWith('/')
        ? endpoint.slice(1)
        : endpoint;
      const url = `${baseUrl}${cleanEndpoint}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch data: ${res.status} ${res.statusText}`
        );
      }
      return res.json();
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  },

  post: async (endpoint: string, body: object) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error('Failed to post data');
    return res.json();
  },

  put: async (endpoint: string, body: object) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    debugger;
    if (!res.ok) throw new Error('Failed to update data');
    return res.json();
  },

  // Add other HTTP methods if needed (PUT, DELETE, etc.)
};
