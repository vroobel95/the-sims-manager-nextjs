const API_BASE_URL = process.env.API_BASE_URL;

export const apiClient = {
  get: async (endpoint: string) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
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
