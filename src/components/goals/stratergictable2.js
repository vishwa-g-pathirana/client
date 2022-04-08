import React, {Fragment, useEffect, useState} from "react";
import Deletegoals from "./deletegoals";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import StratergicTable from "./stratergicTable";
import Swinglan from "./SwingLane";
import Swinglan2 from "./SwingLane2";

const StratergicTable2 = () => {
    const [strats, setStrats] = useState([]);
    const [tasks, setTerms] = useState([]);
    const [tasks2, setTerms2] = useState([]);
    const [tasks3, setTerms3] = useState([]);
    const [tasks4, setTerms4] = useState([]);
    const [date, setDate] = useState([]);
    const [description, setDescription] = useState("");
    const [qid, setQid] = useState("");
    const [temp, setTemp] = useState(true)

    const onSubmitForm = async e => {
        try {

            const body = { qid, description, themecat };
            const response = await fetch("http://localhost:4000/task", {
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
            const response = await fetch("http://localhost:4000/taska")
            const jsonDATA = await response.json();

            setTerms(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTerm2 = async () => {
        try {
            const response = await fetch("http://localhost:4000/taska2")
            const jsonDATA = await response.json();

            setTerms2(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTerm3 = async () => {
        try {
            const response = await fetch("http://localhost:4000/taska3")
            const jsonDATA = await response.json();

            setTerms3(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTerm4 = async () => {
        try {
            const response = await fetch("http://localhost:4000/taska4")
            const jsonDATA = await response.json();

            setTerms4(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }


    const getStrat = async () => {
        try {
            const response = await fetch("http://localhost:4000/jat/17")
            const jsonDATA = await response.json();

            setStrats(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }
    const updateDescription = async (qid, b) => {

        try {
            const body = { qid };

            const response = await fetch(
                `http://localhost:4000/task/${b}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            if (temp === true) { setTemp(false) }
            else {
                setTemp(true)
            }
        } catch (err) {
            console.error(err.message);
        }
        window.location="/themes"


    };

    useEffect(() => {
        getStrat();
        getTerm();
        getTerm2();
        getTerm3();
        getTerm4();
    }, []);
    console.log(tasks);
    console.log(strats);
    var name = strats.description
    var name1 = `${strats.description}`
    const themecat = strats.description
    console.log(name)

    const handleDragEnd = (results) => {

        const { source, destination } = results;
        const qid = destination.droppableId
        const x = source.droppableId
        console.log(qid);
        console.log(x);
        if(x=="1"){
            let tempuser = [...tasks];
            let [selectedRow] = tempuser.splice(results.source.index, 1);
            tempuser.splice(results.destination.index, 0, selectedRow);
            setTerms(tempuser)
            console.log(results, selectedRow, selectedRow.task_id)
            const qid = destination.droppableId
            console.log(qid);
            const sid = selectedRow.task_id
            console.log(selectedRow.task_id)
            updateDescription(qid.toString(),sid)
            console.log(tasks.task_id)
        }
        else if(x=="2"){
            let tempuser = [...tasks2];
            let [selectedRow] = tempuser.splice(results.source.index, 1);
            tempuser.splice(results.destination.index, 0, selectedRow);
            setTerms(tempuser)
            console.log(results, selectedRow, selectedRow.task_id)
            const qid = destination.droppableId
            console.log(qid);
            const sid = selectedRow.task_id
            console.log(selectedRow.task_id)
            updateDescription(qid.toString(),sid)
            console.log(tasks.task_id)
        }
        else if(x=="3"){
            let tempuser = [...tasks3];
            let [selectedRow] = tempuser.splice(results.source.index, 1);
            tempuser.splice(results.destination.index, 0, selectedRow);
            setTerms(tempuser)
            console.log(results, selectedRow, selectedRow.task_id)
            const qid = destination.droppableId
            console.log(qid);
            const sid = selectedRow.task_id
            console.log(selectedRow.task_id)
            updateDescription(qid.toString(),sid)
            console.log(tasks.task_id)
        }
        else if(x=="4"){
            let tempuser = [...tasks4];
            let [selectedRow] = tempuser.splice(results.source.index, 1);
            tempuser.splice(results.destination.index, 0, selectedRow);
            setTerms(tempuser)
            console.log(results, selectedRow, selectedRow.task_id)
            const qid = destination.droppableId
            console.log(qid);
            const sid = selectedRow.task_id
            console.log(selectedRow.task_id)
            updateDescription(qid.toString(),sid)
            console.log(tasks.task_id)
        }




        // let tempuser = [...tasks2];
        // let [selectedRow] = tempuser.splice(results.source.index, 1);
        // tempuser.splice(results.destination.index, 0, selectedRow);
        // setTerms(tempuser)
        // console.log(results, selectedRow, selectedRow.task_id)
        // const qid = destination.droppableId
        // console.log(qid);
        // const sid = selectedRow.task_id
        // console.log(selectedRow.task_id)
        // updateDescription(qid.toString(),sid)
        // console.log(tasks.task_id)





    };



    return <Fragment>
        <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th> Q1 : <Swinglan2 /></th>
                            <th> Q2 : <Swinglan2 /></th>
                            <th> Q3 : <Swinglan2 /></th>
                            <th> Q4 : <Swinglan2 /></th>
                        </tr>
                    </thead>

                    <tbody >

                        <tr>
                            <Droppable droppableId="1">
                                {(provided) => (
                                    <td ref={provided.innerRef} {...provided.droppableProps}>
                                        {tasks.map((task, index) => (
                                            <Draggable draggableId={task.task_id.toString()} index={index} key={task.task_id.toString()}>

                                                {(provided, snapshot) => (
                                                    <div draggable="true" class="border border-success" ref={provided.innerRef} {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            boxShadow: snapshot.isDragging
                                                                ? "0 0 .4rem #666"
                                                                : "none",

                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            padding: 5,
                                                            cursor: 'grab',
                                                        }

                                                        }>

                                                        <p> {task.description} </p>
                                                        <Deletegoals task2={task.task_id} />


                                                    </div>
                                                )}
                                            </Draggable>

                                        ))}
                                        {provided.placeholder}
                                    </td>

                                )}
                            </Droppable>




                            <Droppable droppableId="2">
                                {(provided) => (
                                    <td ref={provided.innerRef} {...provided.droppableProps}>
                                        {tasks2.map((task2, index) => (
                                            <Draggable draggableId={task2.task_id.toString()} index={index} key={task2.task_id.toString()}>

                                                {(provided, snapshot) => (
                                                    <div draggable="true" class="border border-success" ref={provided.innerRef} {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            boxShadow: snapshot.isDragging
                                                                ? "0 0 .4rem #666"
                                                                : "none",

                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            padding: 5,
                                                            cursor: 'grab',
                                                        }

                                                        }>

                                                        <p> {task2.description} </p>
                                                        <Deletegoals task2={task2.task_id} />


                                                    </div>
                                                )}
                                            </Draggable>

                                        ))}
                                        {provided.placeholder}
                                    </td>

                                )}
                            </Droppable>
                            <Droppable droppableId="3">
                                {(provided) => (
                                    <td id="2" ref={provided.innerRef} {...provided.droppableProps}>
                                        {tasks3.map((task, index) => (
                                            <Draggable draggableId={task.task_id.toString()} index={index} key={task.task_id.toString()}>

                                                {(provided, snapshot) => (
                                                    <div draggable="true" class="border border-success" ref={provided.innerRef} {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            boxShadow: snapshot.isDragging
                                                                ? "0 0 .4rem #666"
                                                                : "none",

                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            padding: 5,
                                                            cursor: 'grab',
                                                        }

                                                        }>

                                                        <p> {task.description} </p>
                                                        <Deletegoals task2={task.task_id} />


                                                    </div>
                                                )}
                                            </Draggable>

                                        ))}
                                        {provided.placeholder}
                                    </td>

                                )}
                            </Droppable>
                            <Droppable droppableId="4">
                                {(provided) => (
                                    <td id="2" ref={provided.innerRef} {...provided.droppableProps}>
                                        {tasks4.map((task, index) => (
                                            <Draggable draggableId={task.task_id.toString()} index={index} key={task.task_id.toString()}>

                                                {(provided, snapshot) => (
                                                    <div draggable="true" class="border border-success" ref={provided.innerRef} {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            boxShadow: snapshot.isDragging
                                                                ? "0 0 .4rem #666"
                                                                : "none",

                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            padding: 5,
                                                            cursor: 'grab',
                                                        }

                                                        }>

                                                        <p> {task.description} </p>
                                                        <Deletegoals task2={task.task_id} />


                                                    </div>
                                                )}
                                            </Draggable>

                                        ))}
                                        {provided.placeholder}
                                    </td>

                                )}
                            </Droppable>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal1" >

                                    Add Task
                            </button>

                                {/* model */}
                                <div class="modal" id="myModal1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">

                                            {/* <!-- Modal Header --> */}
                                            <div class="modal-header">
                                                <h4 class="modal-title">Add new task for {strats.description}</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>

                                            {/* <!-- Modal body --> */}
                                            <form name="inputForm" onSubmit={onSubmitForm}  >
                                                <div class="modal-body">

                                                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                                                    <br></br>
                                            Theme Catogary :
                                            <br></br>
                                                    <input type="text" className="form-control" value={themecat} />
                                                    <br></br>
                                            Quater ID :
                                            <br></br>
                                                    <input type="text" className="form-control" value={qid} onChange={e => setQid(e.target.value)} />
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                                    <button className="btn btn-success">Add</button>
                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                </div>
                            </td>




                        </tr>

                        {/* <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr> */}

                    </tbody>


                </table>
            </DragDropContext>

    </Fragment>
}
export default StratergicTable2;