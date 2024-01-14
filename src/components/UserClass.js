import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
      //count: 0,
      //count2: 1,
    };
    //console.log(this.props.name + "Child Constructor");
    console.log("childME" + this.props);
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component is mounted");
    const data = await fetch("https://api.github.com/users/mohit9222");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    //debugger;
    const { name, location, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count={count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Reset Count
        </button> */}
        {/* <h1>Count2={count2}</h1> */}
        <img className="img-avtar" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {html_url}</h4>
      </div>
    );
  }
}

export default UserClass;
