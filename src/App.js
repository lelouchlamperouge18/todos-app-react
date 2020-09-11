import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component{
  constructor(props){
    super(props); //mac dinh constructor
    this.state={
      items:[],
      newItem: {
        text: ''
      }
    }
    // this.addItem = this.addItem.bind(this); 
    // this.onChange = this.onInputChange.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.completeItem = this.completeItem.bind(this);
  }
  addItem = e => {
    e.preventDefault();    //Ko cho gui form??? di voi button| KHONG CHO RELOAD TRANG WEB
    const newItem1 = this.state.newItem; //Item1 nay la 1 item moi
    if(newItem1.text!==""&&([...this.state.items].includes(newItem1.text)===false)){
      const newItems = [...this.state.items, newItem1]; //mang items - them item moi vao cuoi neu no ko rong
      this.setState({     
        items: newItems,  //tra ve lai mang co them phan tu moi
        newItem: {        //enter xong thi se reset lai form
          text: ''
        }
      })
    }
    console.log(newItem1);
  };
  onInputChange = e =>{ 
    this.setState({
      newItem:{
        text: e.target.value //khi nhap vao form thi se thay doi value cua newItem
      }
    })
  };
  deleteItem = e =>{
    const afterDelete = this.state.items.filter(
      item => item.text!==e
    );
    this.setState({
      items: afterDelete
    })
  };
  completeItem = e => {
    // const afterComplete = this.state.items.map(
    //   item => { 
    //     if (item.text===k) return (
    //       <div className="list">
    //         <p> <strike> {item.text} </strike> </p>
    //       </div>   
    //     ); else return item;
    //   }
    // );
    // --------------------------------------------------
    // const afterComplete = this.state.items.map(
    //   item => { 
    //     return (
    //       <div> 123 </div>
    //     )
    //   }
    // );
    // this.setState({
    //   items: afterComplete
    // })
  }
  render(){
    return (
      <div className="App">
        <header>
          <form id="todos-form" onSubmit={this.addItem}>      {/*event in React*/}
            <input type="text" placeholder="Input task.." 
              value={this.state.newItem.text} onChange={this.onInputChange}/>
            <button type="submit"> ADD TASK </button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} 
          completeItem={this.completeItem}></ListItems> {/*Hien thi cac items o ben duoi form*/}
      </div>
    )
  }
}

export default App;
/*Refs: https://reactjs.org/docs/react-component.html
https://tuantranict.blogspot.com/2018/11/tao-ung-dung-todo-list-on-gian-bang.html*/
