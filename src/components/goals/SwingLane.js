import React, { Fragment, useEffect, useState } from "react";
import Table from "./table";


const Swinglan = ({ name }) => {
    const [strats, setStrats] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
    const getStrat = async () => {
        try {
            const response = await fetch("http://localhost:4000/jat/16")
            const jsonDATA = await response.json();

            setStrats(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getStrat();
    }, []);
    console.log(strats);


    return <Fragment>
        <div class="alert alert-primary" role="alert">
            <p> {name} {strats.description}</p>


        </div>

    </Fragment>
}
export default Swinglan