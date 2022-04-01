import React, { Fragment, useEffect, useState } from "react";

const Vission = () => {
    const [vissions, setVissions] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description,date };

            const response = await fetch(
                `http://localhost:4000/dat/1`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }



    const getVission = async () => {
        try {
            const response = await fetch("http://localhost:4000/dat")
            const jsonDATA = await response.json();

            setVissions(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getVission();
    }, []);
    console.log(vissions);
    return <Fragment>
        <br></br>
        <div class="container">
            <h1 class="display-4">Our Vission <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Edit Vission
</button>
            </h1></div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Vission</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className="form-control" onChange={e => setDescription(e.target.value)}

                        />
                         <br></br>
                        <input type="date" className="form-control" onChange={e => setDate(e.target.value)}
                        

                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal fade" onClick={e => updateDescription(e)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <blockquote class="blockquote text-center">
            {vissions.map(Vission => (
                <p class="p-3 mb-2 bg-light text-dark">{Vission.description}</p>

            ))}

            {vissions.map(Vission => (

                <footer class="blockquote-footer">Time duration <cite title="Source Title">{Vission.date}</cite></footer>
            ))}
        </blockquote>
    </Fragment>


}
export default Vission;