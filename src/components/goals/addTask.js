import React, { Fragment, useEffect, useState  } from "react";

const Addtask = () => {
    const [terms, setTerms] = useState([]);
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        try {

            const body = { description };
            const response = await fetch("http://localhost:4000/can1", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }
    return <Fragment><div style={{
        padding: 9
    }}>
        <form name="inputForm" className="d-flex mt-5" onSubmit={onSubmitForm} >
                <input name="fname" type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />

                <button className="btn btn-success">Add Task</button>
            </form>
    </div>
        

    </Fragment>

}
export default Addtask
