import React from 'react';

function ListItems(props){   //Phai dat ten function giong ten file
    const listItems = props.items.map(item =>{     //Moi item tra ve cai text cua no cung 2 button
        return (
            <div className="list">
                <p> {item.text} ➜    
                    {/* <button type="radio"> COMPLETE </button> */}
                    <button type="submit" onClick={()=>props.deleteItem(item.text)}> DELETE </button>
                </p>
            </div>    
        )
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;
