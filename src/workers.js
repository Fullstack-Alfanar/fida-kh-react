import React from "react";
import { useEffect, useState } from 'react';
import Tablee from 'react-bootstrap/Table';

function GetWorkers(){
    const [workers, setWorkerTable] = useState([]);
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("Workers"))){
            setWorkerTable(JSON.parse(localStorage.getItem("Workers")));
        }
        
    },[]);

return(
    <div className="WorkerTable">
        <Tablee striped bordered hover size="sm" variant="dark" responsive="md" >
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Title</th>
                    <th>County</th>
                    <th>City</th>
                    <th>Birth Date</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    workers.map((worker)=>(
                        <tr>
                            <td>{worker.fname}</td>
                            <td>{worker.lname}</td>
                            <td>{worker.title}</td>
                            <td>{worker.country}</td>
                            <td>{worker.city}</td>
                            <td>{worker.bdate}</td>
                            <td><img src={worker.img} ></img></td>
                        </tr>

                    ))
                }
            </tbody>
        </Tablee>
    </div>
);
}


export default GetWorkers;

