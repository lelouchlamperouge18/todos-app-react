import React from 'react';

function ListItems(props){   //Phai dat ten function giong ten file
    const listItems = props.items.map(item =>{     //Moi item tra ve cai text cua no cung 2 button
        return (
            <div className="list">
                <p> {item.text} ➜    
                    <button type="submit" id="button1"> COMPLETE </button>
                    <button type="submit" id="button2"> DELETE </button>
                </p>
            </div>    
        )
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;
