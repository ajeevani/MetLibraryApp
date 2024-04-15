import { getToken } from './authenticate';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export async function addToFavourites(id) {
    const token = getToken();
    try {
        const res = await fetch(`${apiUrl}/favourites/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (res.status === 200) {
            return await res.json();
        }
        return [];
    } catch (error) {
        console.error('Error adding to favorites:', error);
        return [];
    }
}

export async function removeFromFavourites(id) {
    const token = getToken();
    try {
        const res = await fetch(`${apiUrl}/favourites/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `JWT ${token}`
            }
        });
        if (res.status === 200) {
            return await res.json();
        }
        return [];
    } catch (error) {
        console.error('Error removing from favorites:', error);
        return [];
    }
}

export async function getFavourites() {
    const token = getToken();
    try {
        const res = await fetch(`${apiUrl}/favourites`, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${token}`
            }
        });
        if (res.status === 200) {
            return await res.json();
        }
        return [];
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }
}

export async function addToHistory(id) {
    const token = getToken();
    try {
        const res = await fetch(`${apiUrl}/history/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (res.status === 200) {
            return await res.json();
        }
        return [];
    } catch (error) {
        console.error('Error adding to history:', error);
        return [];
    }
}

export async function removeFromHistory(id) {
    const token = getToken();
    try {
        const res = await fetch(`${apiUrl}/history/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `JWT ${token}`
            }
        });
        if (res.status === 200) {
            return await res.json();
        }
        return [];
    } catch (error) {
        console.error('Error removing from history:', error);
        return [];
    }
}

export async function getHistory() {
    const token = getToken();
    try {
        const res = await fetch(`${apiUrl}/history`, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${token}`
            }
        });
        if (res.status === 200) {
            return await res.json();
        }
        return [];
    } catch (error) {
        console.error('Error fetching history:', error);
        return [];
    }
}
