import React from 'react';

function ListItems(props){   //Phai dat ten function giong ten file
    const listItems = props.items.map(item =>{     //Moi item tra ve cai text cua no cung 2 button
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
