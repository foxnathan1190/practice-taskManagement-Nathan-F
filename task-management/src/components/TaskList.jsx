 const taskList = [
        { id: 1, title: "Morning Prep", description: "Wake up, get cleaned up and dressed, eat breakfast." },
        { id: 2, title: "Work", description: "Get to work, start the day and make it through, finish the day." },
        { id: 3, title: "Evening time", description: "When home, decompress, make dinner, relax with family." },
    ];

const TaskList = () => {
   

    return (
        taskList.map(obj => {return {...obj}})
    );
}

export default TaskList;