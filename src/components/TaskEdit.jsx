import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask } from '../controllers/apiController';

const TaskEdit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getTaskById(id)
            .then((task) => setTitle(task.title))
            .catch((error) => console.error('Error carregant la tasca', error));
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();
        updateTask(id, { title })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error actualitzant la tasca', error));
    };

    return (
        <div>
            <h1>Editar Tasca</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Títol:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Guardar canvis</button>
            </form>
        </div>
    );
};

export default TaskEdit;