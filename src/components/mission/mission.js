import React, { Fragment, useEffect, useState } from "react";

const Mission = () => {
    const [missions, setMissions] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description ,date};
            

            const response = await fetch(
                `http://localhost:4000/bat/2`,
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

    const getMission = async () => {
        try {
            const response = await fetch("http://localhost:4000/bat")
            const jsonDATA = await response.json();

            setMissions(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getMission();
    }, []);
    console.log(missions);
   
    return <Fragment>
        <br></br>
        <div class="container">
            <h1 class="display-4">Our Mission <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                Edit Mission
</button></h1></div>
        <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Mission</h5>
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
        {missions.map(Mission => (
                <p class="p-3 mb-2 bg-light text-dark">{Mission.description}</p>

            ))}
            {missions.map(Mission => (
            <footer class="blockquote-footer">Time duration  <cite title="Source Title">{Mission.date}</cite></footer>
            ))}
        </blockquote>
    </Fragment>


}
export default Mission;