import { Link } from "react-router";

function Nav() {
    return(
        <nav>
            <Link to="/task/${task.ID}">TaskDetails</Link>
        </nav>
    );
}