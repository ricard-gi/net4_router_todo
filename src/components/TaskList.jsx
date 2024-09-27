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
        <div className="container mt-5">
            <h1 className="text-center text-primary mb-4">Llista de Tasques</h1>

            <div className="text-center mb-3">
                <Link to="/new" className="btn btn-success">Nova Tasca</Link>
            </div>

            <table className="table table-hover table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">To-do</th>
                        <th scope="col" className="text-center">Accions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.Id}>
                            <td>{task.Id}</td>
                            <td>{task.title}</td>
                            <td className="text-center">
                                <Link to={`/edit/${task.Id}`} className="btn btn-primary btn-sm mx-1">
                                    Editar
                                </Link>
                                <Link to={`/delete/${task.Id}`} className="btn btn-danger btn-sm mx-1">
                                    Esborrar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
