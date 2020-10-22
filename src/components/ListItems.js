import React from 'react';
import './ListItems.css';

function ListItems(props){   
    const listItems = props.items.map((item,index) =>{    
        let className = 'taskName' ;
        if (item.isComplele===true){
            className = 'taskName taskName-line';
        }
        if (item.text==='nothing') className = 'taskName taskName-line';
        return (
            <div className="list" key={index}> 
                <div className={ className }>   
                    <p> {item.text} ➜ </p> 
                </div>
                {/* <p style={{ textDecoration: item.isComplete ? "line-through" : "" }}> {item.text} ➜ </p>  */}
                {/* <p style={!isComplete? {textDecoration: 'line-through'} : null}> {item.text} ➜ </p>  */}
                <div className="twoButton">
                    <button type="submit" onClick={()=>props.completeItem(index)}> COMPLETE </button>
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
