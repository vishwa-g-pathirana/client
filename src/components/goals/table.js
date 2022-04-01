import React, { Fragment, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import Vission from "../vission/vission";
import Addtask from "./addTask";
import Swinglan from "./SwingLane";
import Swinglan2 from "./SwingLane2";
import Table2 from "./table2";




const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId != destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });

    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }

};


const Table = () => {
    const [section, setSections] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);

    const getSections = async () => {
        try {
            const response = await fetch("http://localhost:4000/can1/1")
            const jsonDATA = await response.json();

            setSections(jsonDATA);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getSections();
    }, []);
    console.log(section);

    const itemsFromBackend =
        [{
            id: uuid(), content:
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p> Task 1 </p>
                    <button className="btn btn-warning">Delete
                    </button>
                </div>
        },
        {
            id: uuid(), content:
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p> Task 2 </p>
                    <button className="btn btn-warning">Delete
                    </button>
                </div>
        }


        ];



    //4 quarters

    const columnFromBackend =
    {
        [uuid()]: {
            name: '1st Q :',
            items: itemsFromBackend

        },
        [uuid()]: {
            name: '2nd Q :',
            items: []

        },
        [uuid()]: {
            name: '3rd Q :',
            items: []

        },
        [uuid()]: {
            name: '4th Q :',
            items: []

        },
    };


    const [columns, setColumns] = useState(columnFromBackend);


    return <Fragment>
        <div className="container">
            <Addtask />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', height: '50%' }}>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>

                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <div>

                            <Swinglan name={column.name} />
                            <Droppable droppableId={id} key={id}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 200,
                                            }}
                                        >

                                            {column.items.map((item, index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        userSelect: 'none',
                                                                        padding: 16,
                                                                        margin: '0 0 8px 0',
                                                                        minHeight: '40px',
                                                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                                        color: 'white',
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    {item.content}

                                                                </div>
                                                            )
                                                        }}

                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}



                                        </div>

                                    )

                                }}

                            </Droppable>,
                            {/* 2nd swing lane  */}
                            <Swinglan2 name={column.name} />,

                        </div>

                    )
                })}

            </DragDropContext>,
</div>
        <Table2 />
    </Fragment>

}
export default Table;