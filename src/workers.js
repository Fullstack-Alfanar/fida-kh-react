import React from "react";
import { useEffect, useState } from 'react';

function GetWorkers(){
    const [workers, setWorkerTable] = useState([]);
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("Workers"))){
            setWorkerTable(JSON.parse(localStorage.getItem("Workers")));
        }
        
    },[]);

return(
    <div className="WorkerTable">
        <table>
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
        </table>
    </div>
);
}


export default GetWorkers;

