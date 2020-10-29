import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems'

class App extends React.Component{
  state={ 
    items:[],
    count: 0,
    newItem: {
      text: '',
      isComplete: false
    }    
  } 
  addItem = e => {
    e.preventDefault();    
    var temp = [...this.state.items];
    temp = temp.map(t => t.text);
    const nowItem = this.state.newItem;
    nowItem.text = nowItem.text.trim();
    nowItem.isComplete = false;
    if((nowItem.text!=="")&&(temp.includes(nowItem.text)===false)){
      const newItems = [...this.state.items, nowItem]; 
      let newCount = this.state.count;  
      newCount++;
      this.setState({     
        items: newItems,
        count: newCount,
        newItem: {        
          text: '',
          isComplete: false
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
  completeItem = e => { 
    const afterComplete = [...this.state.items];
    let newCount = this.state.count;  
    if (afterComplete[e].isComplete === false) newCount--;
    afterComplete[e].isComplete = true;
    this.setState({     
      count: newCount,
      items: afterComplete,
    })
    // console.log(this.state.items[e].isComplete);
    // ----------------------------------------------------
    // const afterComplete = this.state.items.map(
    //   item => (e === item.text) ? item.isComplete = true : item 
    // )
    // console.log(afterComplete);
    // console.log(typeof(afterComplete[0]));
    // this.setState({     
    //   items: afterComplete
    // })
  } 
  deleteItem = (e,f) => {
    // console.log(this.state.items[e]);
    const temp = [...this.state.items];
    let newCount = this.state.count;  
    if (temp[f].isComplete === false) {
      newCount--;
    }
    const afterDelete = this.state.items.filter(
      item => item.text!==e
    );
    this.setState({
      count: newCount,
      items: afterDelete
    })
  };
   
  deleteAll = e => {
    this.setState({
      items: [],
      count: 0
    })
  };
  finishAll = e => {
    var temp = [...this.state.items];
    for (let i=0;i<temp.length;i++){
      temp[i].isComplete = true;
    }
    this.setState({
      items: temp,
      count: 0
    })
  };
  render(){
    return (
      <div className="App">
        <h1> TODOS - APP REACT </h1>
        <header>
          <form id="todos-form" onSubmit={this.addItem}>      
            <input 
              type="text" 
              placeholder="Input task here..." 
              value={this.state.newItem.text} 
              onChange={this.onInputChange}
            />
            <button type="submit"> ADD TASK </button>
          </form>
          <div className="allFiDe">
            <button type="submit" className="allFiDeButton" onClick={this.finishAll}>❀ FINISH ALL TASK ❀</button>
            <button type="submit" className="allFiDeButton" onClick={this.deleteAll}>✡ DELETE ALL TASK ✡</button> 
          </div>
        </header>
        <p className="totalTasks">Total tasks left: {this.state.count} </p> 
        <ListItems 
          items={this.state.items} 
          deleteItem={this.deleteItem} 
          completeItem={this.completeItem}
        >
        </ListItems> 
      </div>
    )
  }
}

export default App;





