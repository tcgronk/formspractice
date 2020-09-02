import React from "react";

class Form extends React.Component {
  state = {
    fName: "",
    lName: "",
    jobTitle: "",
    error: "",
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value, error: "" });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.jobTitle) {
      this.setState({ error: "Please select a job title" });
    } else
      // Api call
      this.setState({
        fName: "",
        lName: "",
        jobTitle: "",
        error: "",
      });
  };
  render() {
    return (
      <div className="Form">
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
          <p>
            <select
              name="jobTitle"
              value={this.state.jobTitle}
              onChange={(e) => this.handleInputChange(e)}
            >
              <option value={""}>
                --Select One--
              </option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Data Engineer">Data Engineer</option>
              <option value="Security Engineer">Security Engineer</option>
            </select>
          </p>
          <button onClick={(e) => this.handleFormSubmit(e)}>Submit</button>
          <h3>{this.state.error}</h3>
        </form>
      </div>
    );
  }
}

export default Form;
