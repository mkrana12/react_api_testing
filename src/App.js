import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);

    this.state = { buttonText: "Click Me", background: 'red'};

    this.state = {myFood: 'coconut'};
    this.state = {myName: ''};

    this.state = {teams: []}; // storing the response from the API call

    //this.state = {standings: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleFruit = this.handleFruit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  } // end of constructor

  handleFruit = (event) => {

    var mf;
    event.preventDefault();
   
    this.setState({myFood: event.target.value}); 

    mf = this.state.myFood;

    alert("confirming the fruit selected: " + mf);
    
     // end of handleFruit
  }

  handleChange = (event) => {
   
       this.setState({myName: event.target.value});

  } // end of handleChange

  handleSubmit = (event) => {

    alert('This name was entered' + this.state.myName);
    event.preventDefault();

  } // end of handleSubmit

  anotherChange = () => {
    alert(this.state.myFood);

  } // end of anotherChange

  componentDidMount = async () => {

    console.log("API Called");

    fetch("http://api.football-data.org/v2/competitions/PL/standings", {
      method: 'GET',
      headers: {  
      'X-Auth-Token': '3163ef1e43724739b183eae4cc97ea95'
     
        }
      }) // calling the API to get league data
      .then((response) => response.json())
      .then((responseText) => {
          console.log("Actual Response :: "); // log original json response
          console.log(responseText); // log original json response
          this.setState({ teams: responseText.standings }); // extract only the standings
          
        
          console.log("Standings :: "); // logging standings data from state
          console.log(this.state.teams); // logging standings data from state

        // Parse the JSON to get the data we need
        // Team name, match played, match won, match lost, match drawn, points

          //for (var key in this.state.teams) {   // only reading 1st row. Loop is not needed
            // other two rows can be read to read home and away records

            //console.log("Stage: key: " + key + this.state.teams[key].stage); 

            for(var key2 in this.state.teams[0].table) {

              console.log("Team Name : " + this.state.teams[0].table[key2].team.name 
                  + ", position : " + this.state.teams[0].table[key2].position
                  + ", won : " + this.state.teams[0].table[key2].won
                  + ", draw : " + this.state.teams[0].table[key2].draw
                  + ", lost : " + this.state.teams[0].table[key2].lost
                  + ", points : " + this.state.teams[0].table[key2].points
                  + ", goals for : " + this.state.teams[0].table[key2].goalsFor
                  + ", goals against : " + this.state.teams[0].table[key2].goalsAgainst
                  + ", goal difference : " + this.state.teams[0].table[key2].goalDifference); 
          } // end of for loop
        //}

      }) // end of fetch second then
      .catch((error) => {
        console.log("client error ", error);
      });
  
  } // end of the method componentDidMount


  changeBtnLabel = () => {
    alert(" Button Clicked by ");
    this.setState({buttonText: "Manoj"});
    this.setState({background: 'blue'});
    alert(" Button color changed ");
  } // end of changeBtnLabel

  render() {

    return(


       /* SAMPLE CODE
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
    
          <div className="Team">
            <div className="Team Details">
            
   
            </div>
          </div>
      

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


