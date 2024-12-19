const BASE_URL = "http://localhost:5000";


export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return await response.json();
};


export const addData = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`Failed to add data to ${endpoint}`);
  return await response.json();
};


export const deleteData = async (endpoint, id) => {
  const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete data from ${endpoint}`);
  return await response.json();
};
