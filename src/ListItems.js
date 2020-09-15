import React from 'react';
import './ListItems.css';

function ListItems(props){   
    const listItems = props.items.map(item =>{     
        return (
            <div className="list"> 
                <p> {item.text} ➜ </p> 
                {/* <p style={!isComplete? {textDecoration: 'line-through'} : null}> {item.text} ➜ </p>  */}
                <div className="twoButton">
                    <button type="submit" onClick={()=>props.completeItem(item.text)}> COMPLETE </button>
                    <button type="submit" onClick={()=>props.deleteItem(item.text)}> DELETE </button>
                </div>
            </div>    
        )
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems; 
