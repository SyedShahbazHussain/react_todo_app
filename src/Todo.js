import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item: "hello",
            todoItems:[]
        }
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.addData= this.addData.bind(this);
    }
        onChangeHandler(event){
            var inputVal = event.target.value;
            this.setState({
                item: inputVal
            })
                }
                addData(){
                    var inputVal =this.state.item;
                    var itemInstance= this.state.todoItems;
                    itemInstance.push(inputVal);
                    this.setState({
                        todoItems:itemInstance
                })
            console.log(this.state.todoItems)
            }

    render(){
        return(
            <div>
            <h1>Todo App</h1>
            <div className="header">todo react</div>
            <div className="body"></div>
            <div className="footer">
            <input type="text" value={this.state.item} onChange={this.onChangeHandler}/> 
            <p>{this.state.item}</p>
            
            <button onClick={this.addData}> Add</button> 
            </div>
            </div>
        )
    }   
}

export default Todo;