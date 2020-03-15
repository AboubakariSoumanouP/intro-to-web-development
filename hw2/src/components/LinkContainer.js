import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    /* TODO - Create state object for storing favLinks */
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { favLinks: [] };
    //? { name: "", url: "" }
  }

  removeCharacter = index => {
    // TODO - Create logic for setting the state to filter array and remove favLink at index
    this.setState({ favLinks: [] });
  };

  handleSubmit = favLink => {
    // TODO - Create logic to setState and add new favLink to favLinks array in state
    this.setState(state => ({
      favLinks: state.favLinks.concat([favLink])
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table
          linkData={this.state.favLinks}
          removeLink={this.state.removeLink}
        />

        <br />

        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
