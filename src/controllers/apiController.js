const API_URL = 'https://app.nocodb.com/api/v2/tables/m5mxx4okid0jwxo/records';
const TOKEN = "2HvRWLMLKVokz5Lsx-UrRDS46Ha_8ct-o6l80jz3";


// Obtenir totes les tasques
export const getTasks = () => {
    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    }

    return fetch(API_URL, options)
        .then((response) => response.json())
        .then(r => r.list)
        .catch((error) => {
            console.error('Error obtenint tasques', error);
            throw error;
        });
};

// Afegir una nova tasca
export const addTask = (task) => {
    const options = {
        method: 'POST',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    }
    return fetch(API_URL, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error afegint tasca', error);
            throw error;
        });
};

// Obtenir una tasca per ID
export const getTaskById = (id) => {

    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    }


    return fetch(`${API_URL}/${id}`, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error obtenint la tasca', error);
            throw error;
        });
};

// Actualitzar una tasca
export const updateTask = (id, task) => {
    
    const options = {
        method: 'PATCH',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...task, Id: id}),
    }
    return fetch(API_URL, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error actualitzant tasca', error);
            throw error;
        });
};

// Esborrar una tasca
export const deleteTask = (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Id: id}),
    }
    return fetch(API_URL, options)
        .then(() => { })
        .catch((error) => {
            console.error('Error esborrant tasca', error);
            throw error;
        });
};

