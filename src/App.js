import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isAdmin: false,
      gender: "",
      favouriteType: "Action"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={this.state.isAdmin}
            onChange={this.handleChange}
          />{" "}
          Is ADMIN?
        </label>
        <br />
        <lable>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </lable>
        <lable>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </lable>
        <br />
        <lable> Favourite type: </lable>
        <select
          value={this.state.favouriteType}
          onChange={this.handleChange}
          name="favouriteType"
        >
          <option value="action"> Action </option>
          <option value="romance"> Romance </option>
          <option value="cartoon"> Cartoon </option>
          <option value="anime"> Anime </option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
