import { useParams } from "react-router-dom";
import TaskList from "./TaskList";
import { id, title, description } from "./TaskList"


const TaskDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Task Details</h1>
            < TaskList />
            <p>Displaying details for task ID: {id}</p>
        </div>
    )
}

export default TaskDetail;
