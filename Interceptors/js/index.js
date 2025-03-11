// Below coe shows how to use interceptors in fetch api
// Interceptors are used to modify the request or response globally
// Interceptors are used to add headers globally
// Interceptors are used to handle errors globally
// Interceptors are used to handle authentication globally

async function fetchWithInterceptors(url,options={}) {
    options.headers = {
        ...options.headers,
        "Authorization": `Bearer $(localStorage.getItem("token"))`
    }
    let response = await fetch(url,options)
        if (!response.ok) {
            if (response.status === 401) {
                console.error("Unauthorised access");
                window.location.href = "/login"
                throw new Error("Error in fetching data");
            }
            
        }
        return response.json()
    

}

fetchWithInterceptors("https://jsonplaceholder.typicode.com/todos")
    .then((data) => {
        console.log("Response is :", data);
    })
    .catch((err) => {
        console.log("Error is :", err);
    })

// const fetchWithInterceptor = async (url, options = {}) => {
//     // Default headers (modify as needed)
//     const defaultHeaders = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`, // Example token
//     };
  
//     // Merge headers
//     options.headers = { ...defaultHeaders, ...options.headers };
  
//     try {
//       const response = await fetch(url, options);
  
//       // Handle HTTP errors globally
//       if (!response.ok) {
//         if (response.status === 401) {
//           console.error("Unauthorized! Redirecting to login...");
//           window.location.href = "/login"; // Redirect to login page
//         } else if (response.status === 404) {
//           throw new Error("Error 404: Data not found!");
//         } else if (response.status === 500) {
//           throw new Error("Error 500: Server error! Please try again later.");
//         } else {
//           throw new Error(`HTTP Error: ${response.status}`);
//         }
//       }
  
//       return await response.json(); // Return response data
//     } catch (error) {
//       console.error("Fetch Interceptor Error:", error.message);
//       throw error; // Propagate error to calling function
//     }
//   };
  
//   // Example Usage
//   fetchWithInterceptor("https://jsonplaceholder.typicode.com/todoas")
//     .then((data) => console.log("Fetched Data:", data))
//     .catch((error) => console.error("Fetch Failed:", error.message));
  