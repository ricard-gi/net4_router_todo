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
        <div>
            <h1>Nova Tasca</h1>
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
                <button type="submit">Crear</button>
            </form>
        </div>
    );
};



export default TaskCreate;
