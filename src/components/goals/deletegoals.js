import React, { Fragment, useEffect, useState } from "react";


const Deletegoals = ({task2}) => {
    const [tasks, setTerms] = useState([]);
    const [description, setDescription] = useState("");

    const deleteGoal = async id => {
        console.log(task2)
        try {
            const deleteGoal = await fetch(`http://localhost:4000/task/${id}`, {
                method: "DELETE"


            });
            
        } catch (err) {
            console.error(err.message);
        }
        window.location="/themes"

    }


    return <Fragment>
        <button className="btn btn-success" onClick={() => deleteGoal(task2)}>Delete
                    </button>

    </Fragment>
}
export default Deletegoals;