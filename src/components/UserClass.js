import React from "react";

class UserClass extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            userinfo: {
                name: "Default Name",
                location: "India",
            }
        };
    }

    async componentDidMount() {
        //API call
        const data = await fetch("https://api.github.com/users/Abhishek-Yadav11");
        const json = await data.json();

        console.log(json);
        this.setState({
            userinfo: {
                name: json.name,
                location: json.location,
            }
        }); 
    }

    render(){

        const {name, location} = this.state.userinfo;
        return (
            <div className="user-card">
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h4>Contact : abhishek1102yadav@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;