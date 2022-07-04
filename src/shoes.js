import React from "react";
import { useEffect, useState } from 'react';
import './App.scss';
import Tablee from 'react-bootstrap/Table';

function GetShoes() {
    const [shoes, setShoeTable] = useState([]);
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("shoes"))){
            setShoeTable(JSON.parse(localStorage.getItem("shoes")));
        }
        
    },[]);

    return (

        <div className="ShoeTable">
            <Tablee striped bordered hover size="sm" variant="dark" responsive="md">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Shoe size</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoes.map((shoe) => 
                            <tr>
                                <td>{shoe.company}</td>
                                <td>{shoe.size}</td>
                                <td>{shoe.price}</td>
                                <td>{shoe.amount}</td>
                                <td><img src={shoe.img} ></img></td>
                            </tr>

                        )
                    }
                </tbody>
            </Tablee>
        </div>


    );
}

export default GetShoes;