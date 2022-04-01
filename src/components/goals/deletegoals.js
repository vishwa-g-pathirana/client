import React, { Fragment, useEffect, useState } from "react";


const Deletegoals = () => {
    const [goals, setTerms] = useState([]);
    const [description, setDescription] = useState("");

    const deleteGoal = async id => {
        try {
            const deleteGoal = await fetch(`http://localhost:4000/can1/${id}`, {
                method: "DELETE"


            });
            setTerms(goals.filter(goal => goal.section_id != id))
            console.log(deleteGoal);
        } catch (err) {
            console.error(err.message);
        }
    }


    return <Fragment>
        <button className="btn btn-warning" onClick={() => deleteGoal(goals.section_id)}>Delete
                    </button>

    </Fragment>
}
export default Deletegoals;