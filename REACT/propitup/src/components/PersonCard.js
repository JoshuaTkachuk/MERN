import React, { Component} from 'react';
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            bDay: props.age,
            firstname: props.firstname,
            lastname: props.lastname,
            hairColor: props.hairColor
        };
    }
    addAge=()=>{
        this.setState({bDay: this.state.bDay + 1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.lastname}, {this.state.firstname}</h1>
                <p>Age: {this.state.bDay}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={this.addAge}>Birthday Button for {this.state.firstname + " " + this.state.lastname}</button>
            </div>
    );
    }
}
export default PersonCard;