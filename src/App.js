import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems'

class App extends React.Component{
  state={ 
    items:[],
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
      this.setState({     
        items: newItems,  
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
  deleteItem = e => {
    const afterDelete = this.state.items.filter(
      item => item.text!==e
    );
    this.setState({
      items: afterDelete
    })
  };
  completeItem = e => { 
    const afterComplete = [...this.state.items];
    afterComplete[e].isComplete = true;
    this.setState({     
      items: afterComplete
    }) 
    // const afterComplete = this.state.items.map(
    //   item => (e === item.text) ? item.isComplete = true : item 
    // )
    // console.log(afterComplete);
    // console.log(typeof(afterComplete[0]));
    // this.setState({     
    //   items: afterComplete
    // })
  } 
  deleteAll = e => {
    this.setState({
      items: []
    })
  };
  finishAll = e => {
    var temp = [...this.state.items];
    for (let i=0;i<temp.length;i++){
      temp[i].isComplete = true;
    }
    this.setState({
      items: temp
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
            <button type="submit" class="allFiDeButton" onClick={this.finishAll}>❀ FINISH ALL TASK ❀</button>
            <button type="submit" class="allFiDeButton" onClick={this.deleteAll}>✡ DELETE ALL TASK ✡</button> 
          </div>
        </header>
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





