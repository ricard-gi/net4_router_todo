import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasks } from '../controllers/apiController';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error carregant tasques', error));
    }, []);

    return (
        <div>
            <h1>Llista de Tasques</h1>
            <Link to="/new">Nova Tasca</Link>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>To-do</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.Id}>
                            <td>{task.Id}</td>
                            <td>{task.title}</td>
                            <td>
                                <Link to={`/edit/${task.Id}`}> Editar</Link>
                                <Link to={`/delete/${task.Id}`}> Esborrar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    );
};

export default TaskList;
