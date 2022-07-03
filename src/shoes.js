
import './App.scss';
function shoes(props){
    return(
        <div className="ShoeCard">
            <div><label>Company: </label><label>{props.name}</label></div>
            <div><label>Shoe size: </label><label>{props.size}</label></div>
            <div><label>Price: </label><label>{props.price}</label></div>
            <div className="image"><img src={props.img}/></div>
            
            
            
            
        </div>

    );
}

export default shoes;