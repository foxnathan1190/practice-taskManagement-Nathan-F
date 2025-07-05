import { useParams } from "react-router-dom";

const TaskDetail = () => {
    const { taskId } = useParams();

    const tasks = [
        { id: 1, title: "Morning Prep", description: "Wake up, get cleaned up and dressed, eat breakfast." },
        { id: 2, title: "Work", description: "Get to work, start the day and make it through, finish the day." },
        { id: 3, title: "Evening time", description: "When home, decompress, make dinner, relax with family." },
    ];

    const task = tasks.find((task) => task.id == taskId);

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}

export default TaskDetail;
