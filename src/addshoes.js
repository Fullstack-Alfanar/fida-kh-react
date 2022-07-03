
import './App.scss';

function AddShoes(){
    return(<>
        <div>
            <h1> ADD shoes</h1>
            <form>
            <div>
                <label>Company : </label>
                <input type={"text"}></input>
            </div>
            <div>
                <label>Shoe size : </label>
                <input type={"number"}></input>
            </div>
            <div>
                <label>Price : </label>
                <input type={"number"}></input>
            </div>
            <div>
                <label>Amount : </label>
                <input type={"text"}></input>
            </div>
            <div>
                <label>Image: </label>
                <input type={"text"}></input>
            </div>
            <div className="btn">
                <input type={"submit"} value={"Add"} ></input>
            </div>
            </form>
        </div>
        </>);

}

export default AddShoes;