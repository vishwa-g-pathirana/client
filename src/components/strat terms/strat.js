import React, { Fragment, useEffect, useState } from "react";
import EditTerm from "./editterms";

const StratergicTerms = () => {
    const [terms, setTerms] = useState([]);
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        try {

            const body = { description };
            const response = await fetch("http://localhost:4000/jat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message);
        }
    }




    const getTerm = async () => {
        try {
            const response = await fetch("http://localhost:4000/jat")
            const jsonDATA = await response.json();

            setTerms(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    const deleteTerm = async id => {
        try {
            const deleteTerm = await fetch(`http://localhost:4000/jat/${id}`, {
                method: "DELETE"


            });
            setTerms(terms.filter(term => term.term_id != id))
            console.log(deleteTerm);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTerm();
    }, []);
    console.log(terms);


    return <Fragment>

        <div class="container">

            <br></br>
            <h1 class="display-4">Stratergic Themes</h1>
            <br></br>
            <form name="inputForm" className="d-flex mt-5" onSubmit={onSubmitForm} >
                <input name="fname" type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />

                <button className="btn btn-success">Add</button>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>


                    {terms.map(term => (
                        <tr key={term.term_id}>
                            <td>{term.description}</td>
                            <th><EditTerm term={term} /></th>
                            <th><button className="btn btn-outline-danger" onClick={() => deleteTerm(term.term_id)}>Delete</button></th>
                        </tr>
                    ))}





                </tbody>
            </table>
        </div>
        <br></br>

    </Fragment>

}
export default StratergicTerms;