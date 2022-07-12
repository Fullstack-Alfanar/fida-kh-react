
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import { useNavigate } from "react-router-dom";

function AddShoes() {
    const shoesArr=new Array();
    const navigate = useNavigate();
    const [shoes, SetShoeTable] = useState(shoesArr);
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("shoes"))){
            SetShoeTable(JSON.parse(localStorage.getItem("shoes")));
        }
        
    },[]);
    const [addShoesData, SetShoesData] = useState({
        company: "",
        size: "",
        price: "",
        amount: "",
        img: ""
    })
    const handleSetShoe = (event) => {
        event.preventDefault();

        const fieldId = event.target.getAttribute("name");
        const fielValue = event.target.value;
        const newShoesData = { ...addShoesData };
        newShoesData[fieldId] = fielValue;
        SetShoesData(newShoesData);
    }
    const setShoe = (event) => {
        event.preventDefault();
        const newShoe = {
            company: addShoesData.company,
            size: addShoesData.size,
            price: addShoesData.price,
            amount: addShoesData.amount,
            img: addShoesData.img
        }
        console.log(shoes);
        shoes.push(newShoe);
        console.log(shoes);
        localStorage.setItem("shoes",JSON.stringify(shoes));
        const newShoes = [...shoes, newShoe];
        SetShoeTable(newShoes);
        navigate("/getshoes");

    }
    return (<>
        <div>
            <h1> ADD shoes</h1>
            <form onSubmit={setShoe}>
                <div>
                    <label>Company : </label>
                    <input type={"text"} name="company" onChange={handleSetShoe}></input>
                </div>
                <div>
                    <label>Shoe size : </label>
                    <input type={"number"} name="size" onChange={handleSetShoe}></input>
                </div>
                <div>
                    <label>Price : </label>
                    <input type={"number"} name="price" onChange={handleSetShoe}></input>
                </div>
                <div>
                    <label>Amount : </label>
                    <input type={"text"} name="amount" onChange={handleSetShoe}></input>
                </div>
                <div>
                    <label>Image: </label>
                    <input type={"text"} name="img" onChange={handleSetShoe}></input>
                </div>
                <div className="btn">
                    <button type="submit"> Add</button>
                </div>
            </form>
        </div>
    </>);

}

export default AddShoes;