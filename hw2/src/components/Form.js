import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    /*
            TODO - set initial state for link name and URL
        */
    this.handleChangeName = this.handleChangeName.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.state = { name: "", url: "" };
  }

  handleChangeName = event => {
    //TODO - Logic for changing state based on form changes

    this.setState({
      name: event.target.value
    });
  };

  handleChangeURL = event => {
    // TODO - Logic for changing state based on form changes

    this.setState({
      url: event.target.value
    });
  };

  onFormSubmit = event => {
    // TODO - Logic for calling props to handle submission and setting state changes
    console.log(this.state.name);
    console.log(this.state.url);
    event.preventDefault();
    // this.props.newData(this.state.name);
    this.props.handleSubmit(this.state);

    // * This will reset the form on submission
    this.setState({
      name: "",
      url: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <label>URL</label>
        <input
          type="text"
          value={this.state.url}
          onChange={this.handleChangeURL}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;