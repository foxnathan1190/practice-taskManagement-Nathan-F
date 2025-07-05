import { Link } from "react-router";

const tasks = [
    { id: 1, title: "Morning Prep", description: "Wake up, get cleaned up and dressed, eat breakfast." },
    { id: 2, title: "Work", description: "Get to work, start the day and make it through, finish the day." },
    { id: 3, title: "Evening time", description: "When home, decompress, make dinner, relax with family." },
];

const TaskList = () => {

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;