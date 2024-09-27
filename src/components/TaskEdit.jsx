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
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Editar Tasca</h1>
            
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">Títol:</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success">
                        Guardar canvis
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-secondary ms-2"
                        onClick={() => navigate('/')}
                    >
                        Cancel·lar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskEdit;
