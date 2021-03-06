import React, { Component } from 'react';
import UserServices from '../services/UserServices';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            hobby: '',
            occupation: '',
            location: ''
        }
        //bind those event handlers to the conponent. bind, pass those as references 
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeHobbyHandler = this.changeHobbyHandler.bind(this);
        this.changeOccupationHandler = this.changeOccupationHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }
    
    componentDidMount() {
        UserServices.getUserById(this.state.id).then((res) => {
            let user = res.data;
            console.log("test", user);
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                dob: user.dob,
                hobby: user.hobby,
                occupation: user.occupation,
                location: user.location
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dob: this.state.dob,
            hobby: this.state.hobby, occupation: this.state.occupation, location: this.state.location
        };
        console.log('User =>' + JSON.stringify(user));
        // console.log('id => ' + JSON.stringify(this.state.id));
        UserServices.updateUser(user, this.state.id).then(res => {
            this.props.history.push('/users');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeDobHandler = (event) => {
        this.setState({ dob: event.target.value });
    }
    changeHobbyHandler = (event) => {
        this.setState({ hobby: event.target.value });
    }
    changeOccupationHandler = (event) => {
        this.setState({ occupation: event.target.value });
    }
    changeLocationHandler = (event) => {
        this.setState({ location: event.target.value });
    }
    cancel() {
        this.props.history.push('/users');
    }

    //md - medium devices  - screen witdth equal or greater than 768px
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update User</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Date of Birth: </label>
                                        <input placeholder="dob" name="dob" className="form-control"
                                            value={this.state.dob} onChange={this.changeDobHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Hobby: </label>
                                        <input placeholder="Hobby" name="hobby" className="form-control"
                                            value={this.state.hobby} onChange={this.changeHobbyHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Occupation: </label>
                                        <input placeholder="Occupation" name="occupation" className="form-control"
                                            value={this.state.occupation} onChange={this.changeOccupationHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Location: </label>
                                        <input placeholder="Location" name="location" className="form-control"
                                            value={this.state.location} onChange={this.changeLocationHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default UpdateUserComponent;