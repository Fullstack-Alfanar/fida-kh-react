import './App.scss';

function AddWorker() {
    return (
        <div>
            <h1> ADD worker</h1>
            <form>
            <div>
                <label>First Name: </label>
                <input type={"text"}></input>
            </div>
            <div>
                <label>Last Name: </label>
                <input type={"text"}></input>
            </div>
            <div>
                <label>Title: </label>
                <input type={"text"}></input>
            </div>
            <div>
                <label>County: </label>
                <input type={"text"}></input>
            </div>
            <div> 
                <label>City: </label>
                <input type={"text"}></input>
            </div>
            <div>
                <label>Birth Date: </label>
                <input type={"date"}></input>
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

    );
}

export default AddWorker;