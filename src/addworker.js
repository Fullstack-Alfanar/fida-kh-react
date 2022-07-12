import { useEffect, useState } from 'react';
import './App.scss';
import { useNavigate } from "react-router-dom";


function AddWorker() {
    const navigate = useNavigate();
    const [Workers, SetWorkerTable] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("Workers"))) {
            SetWorkerTable(JSON.parse(localStorage.getItem("Workers")));
        }

    }, []);
    const [addWorkersData, SetWorkersData] = useState({
        fname: "",
        lname: "",
        title: "",
        country: "",
        city: "",
        bdate: "",
        img: ""
    })
    const handleSetWorker = (event) => {
        event.preventDefault();

        const fieldId = event.target.getAttribute("name");
        const fielValue = event.target.value;
        const newWorkersData = { ...addWorkersData };
        newWorkersData[fieldId] = fielValue;
        SetWorkersData(newWorkersData);
    }
    const setWorker = (event) => {
        event.preventDefault();

        if (CheckValidation(addWorkersData.fname,true, 2, 30) &&
            CheckValidation(addWorkersData.lname,true, 2, 30) &&
            CheckValidation(addWorkersData.title,true, 5, 20) &&
            CheckValidation(addWorkersData.country,true, 3, 30) &&
            CheckValidation(addWorkersData.city,true, 2, 30)) {
            const newWorker = {
                fname: addWorkersData.fname,
                lname: addWorkersData.lname,
                title: addWorkersData.title,
                country: addWorkersData.country,
                city: addWorkersData.city,
                bdate: addWorkersData.bdate,
                img: addWorkersData.img
            }
            console.log(Workers);
            Workers.push(newWorker);
            console.log(Workers);
            localStorage.setItem("Workers", JSON.stringify(Workers));
            const newWorkers = [...Workers, newWorker];
            SetWorkerTable(newWorkers);
            navigate("/getWorker");
        } else alert("error in validation");
    }
    return (
        <div>
            <h1> ADD Worker</h1>
            <form onSubmit={setWorker}>
                <div>
                    <label>First Name: </label>
                    <input name="fname" type={"text"} onChange={handleSetWorker}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input name="lname" type={"text"} onChange={handleSetWorker}></input>
                </div>
                <div>
                    <label>Title: </label>
                    <input name="title" type={"text"} onChange={handleSetWorker}></input>
                </div>
                <div>
                    <label>County: </label>
                    <input name="country" type={"text"} onChange={handleSetWorker}></input>
                </div>
                <div>
                    <label>City: </label>
                    <input name="city" type={"text"} onChange={handleSetWorker}></input>
                </div>
                <div>
                    <label>Birth Date: </label>
                    <input name="bdate" type={"date"} onChange={handleSetWorker}></input>
                </div>
                <div>
                    <label>Image: </label>
                    <input name="img" type={"text"} onChange={handleSetWorker}></input>
                </div>
                <div className="btn">
                    <button type="submit"> Add</button>
                </div>
            </form>
        </div>

    );
}

export default AddWorker;

function CheckValidation(input, required, min, max) {
    console.log(input);
    if (input != null && required == true) {
        if (input.length >= min && input.length <= max)
            return true;
    }
    return false;
}