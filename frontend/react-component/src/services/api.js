// const API_URL = "http://localhost:5000/api";

// export async function apiRequest(endpoint, method = "GET", body) {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${API_URL}${endpoint}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }),
//     },
//     body: body ? JSON.stringify(body) : null,
//   });

//   if (!res.ok) {
//     const error = await res.json();
//     throw new Error(error.message || "API error");
//   }

//   return res.json();
// }



// const API_URL = "http://localhost:5000/api";

// export async function apiRequest(endpoint, method = "GET", body) {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${API_URL}${endpoint}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }),
//     },
//     body: body ? JSON.stringify(body) : null,
//   });

//   if (!res.ok) {
//     const text = await res.text(); // 👈 IMPORTANT DEBUG
//     throw new Error(text);
//   }

//   return res.json();
// }

const API_URL = import.meta.env.VITE_API_URL;

console.log("API URL =", import.meta.env.VITE_API_URL);

export async function apiRequest(endpoint, method = "GET", body) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  return res.json();
}
