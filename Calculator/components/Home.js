import React, { Component } from 'react';
import '../style/Home.css';
var axios = require('axios');

export class Home extends Component {

	constructor(props){
        super(props);
        this.display=this.display.bind(this);
        this.clear=this.clear.bind(this);
        this.set_First=this.set_First.bind(this);
        this.set_Second=this.set_Second.bind(this);
        this.call=this.call.bind(this);
    }

    state = {
    	value:0,
    	first: 0,
    	second: 0,
    	operation:''
    }

  	display(digit) {
  		const {value} = this.state

  		this.setState({
  			value: value === 0 ? String(digit) : value + digit
  		});
  	}

  	clear() {
  		
  		this.setState({
  			value: 0,
  			first: 0,
  			second: 0,
  			operation:''
  		});
  	}

  	set_First(op) {

  		const {value} = this.state

  		this.setState({
    		first:value,
    		value:0,
    		operation:op
  		})
  	}

  	set_Second() {
		
		const {value} = this.state

  		this.setState({
			second:value,
    		value:0
			}, () => {
			   this.call()
		})	
	}


	call() {
  		
  		var self = this;

	  		axios.post('http://localhost:4000/', {
			    first : self.state.first,
			    second : self.state.second,
			    op : self.state.operation
			  })
			  .then(function (response) {
				console.log(response.data.ans);
				
				    self.setState({
				        value:response.data.ans,				
				        first:response.data.ans
				    })
					
			  })
			  .catch(function (error) {
			    console.log(error)
			  })
		  	}
  	


  render() {
    return (
      <div className="Calc">
        <div className="calcForm">
        
        	<textarea id= "data" value={this.state.value} className="Tarea"></textarea>
        	
        	<p>
        		<button className="button" onClick={() => this.display(0)}>0</button> 
        		<button className="button" onClick={() => this.display(1)}>1</button>
        		<button className="button" onClick={() => this.display(2)}>2</button>
        	</p>
        	
        	<p>
        		<button className="button" onClick={() => this.display(3)}>3</button> 
        		<button className="button" onClick={() => this.display(4)}>4</button>
        		<button className="button" onClick={() => this.display(5)}>5</button>
        	</p>	

        	<p>
        		<button className="button" onClick={() => this.display(6)}>6</button> 
        		<button className="button" onClick={() => this.display(7)}>7</button>
        		<button className="button" onClick={() => this.display(8)}>8</button>
        	</p>

        	<p>
        		<button className="button" onClick={() => this.display(9)}>9</button> 
        		<button className="button" onClick={() => this.set_Second()}>=</button>
        		<button className="button" onClick={() => this.clear()}>CLR</button>
        	</p>

        	<p>
        		<button className="button" onClick={() => this.set_First('ADD')}>+</button> 
        		<button className="button" onClick={() => this.set_First('MIN')}>-</button>
        		<button className="button" onClick={() => this.set_First('MUL')}>*</button>
        		<button className="button" onClick={() => this.set_First('DIV')}>/</button>
        	</p>

        </div>
      </div>
    );
  }
}


