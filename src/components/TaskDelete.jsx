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
        <div className="container mt-5">
            <h1 className="text-center text-danger mb-4">Confirmar Esborrat</h1>
            
            <p className="text-center">Estàs segur que vols esborrar la tasca amb ID <strong>{id}</strong>?</p>
            
            <div className="text-center">
                <button 
                    onClick={handleDelete} 
                    className="btn btn-danger mx-2"
                >
                    Confirmar
                </button>
                <button 
                    onClick={() => navigate('/')} 
                    className="btn btn-secondary mx-2"
                >
                    Cancel·lar
                </button>
            </div>
        </div>
    );
};

export default TaskDelete;
