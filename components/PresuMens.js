import React, { useState, useEffect } from 'react';

export default class PresuMens extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fijos: '',
            val1: '',
            val2: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    /*
     handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
    */

    handleChange(e){
        const target = e.target
        const val1 = target.
        this.setState({
            val1: e.target.value,
            val2: e.target.value
        })
    }

    render(){
        function Example() {
            const [count, setCount] = useState(0);
          
            useEffect(() => {
              document.title = `You clicked ${count} times`;
            });
          }
        const count = 0;
        return(
            <div>
                <h4>Valor 1: {this.state.val1}</h4>
                <h4>Valor 2: {this.state.val2}</h4>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                
                
                <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
            </div>
            
        );
    }

    /*state = {
        val1: "",
        val2:"",
        fijos : ""
    }

    changeVal1(e){
        const val1 = e.target.value
        console.log(val1)
        this.setState({
            val1: e.target.value
        })
    }

    changeVal2(e){
        const val2 = e.target.value
        console.log(val2)
        this.setState({
            val2: e.target.value
        })
    }

    operaciones(){
        const oper = this.state.val1 - this.state.val2
        console.log("la operacion es:" + oper)
        this.setState({
            fijo: oper
        })
    }

    //<a className="btn" onChange={this.operaciones()}>procesar</a>

    render(){
        return(
            <div>
                <h4>Valor 1: {this.state.val1}</h4>
                <h4>Valor 2: {this.state.val2}</h4>
                <h4>Resultado: {this.state.fijos}</h4>
                <input type="number" value={this.state.val1} name="gasto"
                    onChange={this.changeVal1.bind(this)} placeholder="Ingresa el gasto"/>

                <input type="number" value={this.state.val2} name="gasto" 
                    onChange={this.changeVal2.bind(this)} placeholder="Ingresa el gasto"/>

                <button onClick={this.operaciones()}>
                    Click me
                </button>
            </div>
        );
    }*/
}