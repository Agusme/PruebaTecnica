import React from 'react';
import './SubmitForm.css';

class SubmitForm extends React.Component{
    render(){
        return (
            <div className='form'>
                <h1 >Prueba Tecnica React.js</h1>
                <form onSubmit={this.addItem}>
                <input className='input' ref={(a) => this._inputElement = a} placeholder='Add Task' />
                    <button className='add-button' type='submit'>Add</button>

                </form>
            </div>
        );
    }
    constructor(props){
        super(props);
        this.state = { tasksCount: 0 };
    
        this.addItem = this.addItem.bind(this);
    }
    
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              id: this.state.tasksCount,
              key: Date.now()
            };
    
            this.props.addTask(newItem);
    
            this.state.tasksCount++;
            this._inputElement.value = "";
        }
             
        e.preventDefault();
    }
    
    
}


export default SubmitForm;
