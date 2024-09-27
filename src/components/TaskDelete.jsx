import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTask, getTaskById } from '../controllers/apiController';

const TaskDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [taskTitle, setTaskTitle] = useState('');

    useEffect(() => {
        // Obtenim la tasca per ID per obtenir el títol
        getTaskById(id)
            .then(task => setTaskTitle(task.title)) // Actualitzem l'estat amb el títol de la tasca
            .catch((error) => console.error('Error obtenint la tasca', error));
    }, [id]);

    function handleDelete() {
        deleteTask(id)
            .then(() => {
                console.log(`Tasca amb títol "${taskTitle}" esborrada`);
                navigate('/');
            })
            .catch((error) => console.error('Error esborrant la tasca', error));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-danger mb-4">Confirmar Esborrat</h1>
            
            {/* Mostrem el títol de la tasca en lloc de l'ID */}
            <p className="text-center">Estàs segur que vols esborrar la tasca: <strong>{taskTitle}</strong>?</p>
            
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
