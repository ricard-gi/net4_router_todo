import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTask } from '../controllers/apiController';

const TaskDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleDelete() {
        deleteTask(id)
            .then(() => {
                console.log(`Tasca amb id ${id} esborrada`);
                navigate('/');
            })
            .catch((error) => console.error('Error esborrant la tasca', error));
    };

    return (
        <div>
            <h1>Confirmar Esborrat</h1>
            <p>Estàs segur que vols esborrar la tasca amb ID {id}?</p>
            <button onClick={handleDelete}>Confirmar</button>
            <button onClick={() => navigate('/')}>Cancel·lar</button>
        </div>
    );
};


export default TaskDelete;