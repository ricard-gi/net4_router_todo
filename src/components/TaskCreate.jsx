import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../controllers/apiController';

const TaskCreate = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        addTask({ title })
            .then(() => navigate('/'))
            .catch((error) => console.error('Error afegint tasca', error));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Nova Tasca</h1>

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
                        Crear
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

export default TaskCreate;
