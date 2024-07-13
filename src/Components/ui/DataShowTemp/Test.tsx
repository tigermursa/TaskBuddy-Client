import { useGetTaskDataQuery } from "../../../redux/features/task/taskApi";


const Test = () => {
    const theData = useGetTaskDataQuery("")
    console.log(theData)
    return (
        <div>
            <h1>Testing</h1>
        </div>
    );
};

export default Test;