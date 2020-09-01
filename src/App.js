import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fName: "",
    lName: "",
  };
  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //API call here

    this.setState({
      fName: "",
      lName: "",
    });
  };
  render() {
    return (
      <div className="App">
        <form>
            <h1>Form</h1>
            <p>
              <label htmlFor="first-name">First Name: </label>
              <input
                type="text"
                id="first-name"
                name="fName"
                value={this.state.fName}
                onChange={(e) => this.handleInputChange(e)}
              />
            </p>
            <p>
              <label htmlFor="last-name">Last Name: </label>
              <input
                type="text"
                id="last-name"
                name="lName"
                value={this.state.lName}
                onChange={(e) => this.handleInputChange(e)}
              />
            </p>
          <button onClick={(e) => this.handleFormSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
