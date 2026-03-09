import Cookies from "js-cookie";

export const BASE_URL = process.env.NODE_ENV === 'production'
    ? "https://skillshiksha.ai/api/api"
    : "http://localhost:5000/api";

type FetchOptions = RequestInit & {
    requiresAuth?: boolean;
};

/**
 * A centralized wrapper around native fetch that handles injecting the Authorization header.
 */
export const apiFetch = async (endpoint: string, options: FetchOptions = {}) => {
    const { requiresAuth = true, headers, ...customConfig } = options;

    const config: RequestInit = {
        ...customConfig,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    // Automatically inject the token if authentication is required
    if (requiresAuth) {
        const token = Cookies.get("adminToken");
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        } else {
            console.warn(`[apiFetch] No auth token found. Request to ${endpoint} might fail with 401.`);
        }
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
        // Standardize error propagation based on your new globally handled backend AppErrors
        throw new Error(data.message || `API Error: ${response.statusText}`);
    }

    return data;
};
