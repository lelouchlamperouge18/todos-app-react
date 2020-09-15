import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component{
  state={ 
    items:[],
    newItem: {
      text: ''
    },    
    isComplete: false
  } 
  addItem = e => {
    e.preventDefault();    
    var temp = [...this.state.items];
    temp = temp.map(t => t.text);
    const nowItem = this.state.newItem;
    nowItem.text = nowItem.text.trim();
    if((nowItem.text!=="")&&(temp.includes(nowItem.text)===false)){
      const newItems = [...this.state.items, nowItem]; 
      this.setState({     
        items: newItems,  
        newItem: {        
          text: ''
        }
      })
    }
    // console.log(nowItem);
    // console.log(this.state.items);
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
    this.setState({
      isComplete: true 
    })
  } 
  render(){
    return (
      <div className="App">
        <h1> TODOS - APP REACT </h1>
        <header>
          <form id="todos-form" onSubmit={this.addItem}>      
            <input type="text" placeholder="Input task here..." 
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





