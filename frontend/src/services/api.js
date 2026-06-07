const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return response.json();
};

export const updateTask = async (id, task) => {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }
  );

  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
};

export const toggleTask = async (id) => {
  const response = await fetch(
    `${API_URL}/${id}/toggle`,
    {
      method: "PATCH",
    }
  );

  return response.json();
};