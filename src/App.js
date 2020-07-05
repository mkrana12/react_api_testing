import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state = { buttonText: "Click Me", background: 'red'};

    this.state = {myFood: 'coconut'};
    this.state = {myName: ''};

    this.state = {teams: []};

    //this.state = {standings: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleFruit = this.handleFruit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleFruit = (event) => {

    var mf;
    event.preventDefault();
   
    this.setState({myFood: event.target.value}); 

    mf = this.state.myFood;

    alert("confirming the fruit selected: " + mf);
    
    
  }

  handleChange = (event) => {
   
       this.setState({myName: event.target.value});


  }

  handleSubmit = (event) => {

    alert('This name was entered' + this.state.myName);
    event.preventDefault();
  }

  anotherChange = () => {
    alert(this.state.myFood);

  }

  componentDidMount = async () => {

    alert("API Called");
    console.log("API Called");

    fetch("http://api.football-data.org/v2/competitions/PL/standings", {
    method: 'GET',
    headers: {  
      'X-Auth-Token': '3163ef1e43724739b183eae4cc97ea95'
     
    }
  })
    .then((response) => response.json())
    .then((responseText) => {
        console.log(responseText);
        this.setState({ teams: responseText.standings });
        //this.setState({ standings: responseText.standings });
        console.log("Season Stats");
        console.log(this.state.teams);

        //parse the json object

        /*
        var myTeams = JSON.parse(this.state.teams);
        console.log("First Record");
        console.log(myTeams.teams[0].stage);
        */

        for (var key in this.state.teams) {   
            console.log("Stage: key: " + key + this.state.teams[key].stage); 
            console.log("Table: key: " + key + this.state.teams[key].table[key].position); 
            console.log("Team: key: " + key + this.state.teams[key].table[key].team.name); 
        }

    })
    .catch((error) => {
      console.log("client error ", error);
    });
  
  }

/*
.then((response) => response.text())
    .then((responseText) => {
        console.log(JSON.parse(responseText));

        */

  changeBtnLabel = () => {
    alert(" Button Clicked by ");
    this.setState({buttonText: "Manoj"});
    this.setState({background: 'blue'});
    alert(" Button color changed ");
  }

  render() {

    return(


       /*
        {this.state.teams.map((team) => (
          
          <div className="Team">
            <div className="Team Details">
              <h5 className="Season">{team.season}</h5>
              
            </div>
          </div>
          
        ))}; */

      // End of Team Display

      /*

              <h5 className="Season">{this.state.teams.startDate}</h5>
            
              <h5 className="Season">{this.state.teams.endDate}</h5>

                     <ol>
                {this.state.teams.map(stand => <li>{stand}</li>)}
              </ol>
            
   */

    <div className="App">

      <p> {console.log("Inside Render: ")}</p>
      <p> {console.log(this.state.teams)}</p>

       <p> {console.log("Standings Stage: ")}</p>
      <p> {console.log(this.state.teams)}</p>

      <p>
    
          
          <div className="Team">
            <div className="Team Details">


       
             
   
            </div>
          </div>
          
      
      </p>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is starting to work now WOW !!!
        </p>
        <p>
          "we will now test a button element:  "
          </p>
          <button id="btn" style={{ backgroundColor: this.state.background }}
          onClick = {this.changeBtnLabel} > {this.state.buttonText} </button>

          <label>
          Pick your favorite flavor:
          <select value={this.state.myFood} onChange={this.handleFruit}>
            <option value="select">Select Fruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

      <p> </p>

     


    <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

            
      </header>
    </div>

          
  );
}

}

export default App;


