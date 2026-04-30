// Change this to your live Render/Heroku URL when deploying
const API_BASE_URL = "https://insightaiq-feomzie228-b8bfdn1b.leapcell.dev"; 

async function apiFetch(endpoint, options = {}) {
    const config = {
        ...options,
        credentials: "include", // MANDATORY: Sends HTTP-only cookies cross-domain
        headers: {
            'X-API-Version': '1',
            'Content-Type': 'application/json',
            ...options.headers,
        },
    };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
        
        if (response.status === 401) {
            window.location.href = "/index.html";
            return null;
        }

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "An error occurred");
            return null;
        }

        return data;
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
}