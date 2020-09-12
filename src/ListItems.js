import React from 'react';

function ListItems(props){   
    const listItems = props.items.map(item =>{     
        return (
            <div className="list">
                <p> {item.text} ➜ </p>   
                <button type="submit" onClick={()=>props.completeItem(item.text)}> COMPLETE </button>
                <button type="submit" onClick={()=>props.deleteItem(item.text)}> DELETE </button>
            </div>    
        )
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;
