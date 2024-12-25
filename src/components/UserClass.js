import React from "react";


class UserClass extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            userinfo: {
                name: "Default",
                location: "India",
                email: "@gmail.com"
            }       
        };
    }

    async componentDidMount() {
        //API call
        const data = await fetch("https://api.github.com/users/Abhishek-Yadav11");
        const json = await data.json();

        //console.log(json);
        this.setState({
            userinfo: {
                name: json.name,
                location: json.location,
                email: json.email
            }
        });
        
        //this.timer = setInterval(() => console.log("Hello"), 1000);
    }
    
    // componentDidUpdate() {
    //     console.log("Component Updated");
    // }
    // componentWillUnmount() {
            // clearInterval(this.timer);
    //     console.log("Component Unmounted");
    // }


    render(){

        const {name, location,email} = this.state.userinfo;

        return (
            <div className="user-card">
                <h3>Name: {name || "Default"}</h3>
                <h4>Location: {location || "India"}</h4>
                <h4>Contact : {email || "@gmail.com"}</h4>
            </div>
        )
    }
}

export default UserClass;