import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component{
  state={ 
    items:[],
    newItem: {
      text: ''
    }
  }
  addItem = e => {
    e.preventDefault();    
    const nowItem = this.state.newItem; 
    if((nowItem.text!=="")&&([...this.state.items].includes(nowItem.text)===false)){
      const newItems = [...this.state.items, nowItem]; 
      this.setState({     
        items: newItems,  
        newItem: {        
          text: ''
        }
      })
    }
    console.log(nowItem);
  };
  onInputChange = e =>{ 
    this.setState({
      newItem:{
        text: e.target.value 
      }
    })
  };
  deleteItem = e => {
    const afterDelete = this.state.items.filter(
      item => item.text!==e
    );
    this.setState({
      items: afterDelete
    })
  };
  completeItem = e => { 
    //...
  }
  render(){
    return (
      <div className="App">
        <header>
          <form id="todos-form" onSubmit={this.addItem}>      
            <input type="text" placeholder="Input task.." 
              value={this.state.newItem.text} onChange={this.onInputChange}/>
            <button type="submit"> ADD TASK </button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} 
          completeItem={this.completeItem}></ListItems> 
      </div>
    )
  }
}

export default App;





