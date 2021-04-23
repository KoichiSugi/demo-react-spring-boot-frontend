
import React from 'react';
import UserService from '../services/UserServices';

class UserConponent extends React.Component {
    //The constructor() method is called before anything else, when the component is initiated
    constructor(props) {
        //Props are arguments passed into React components.
        //Props are passed to components via HTML attributes.
        super(props)
        this.state = {
            users: []
        }
        //event handler is called from the button in UserComponent.js
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    //The componentDidMount() method is called after the component is rendered.
    //This is where you run statements that requires that the component is already placed in the DOM.
    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
    //whenever the button is clicked this function routes to the component
    addUser() {
        //history object allows you to controle the history of the browser
        this.props.history.push('/add-user');
    }
    editUser(id) {
        this.props.history.push(`/update-user/${id}`);
    }
    deleteUser(id) {
        console.log(id);
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }

    //the method that actually outputs the HTML to the DOM.
    render() {
        return (
            <div>
                <h1 className="text-center">User List</h1>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addUser} >Add User</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>User ID</td>
                                <td>User First Name</td>
                                <td>User Last Name</td>
                                <td>User Email</td>
                                <td>User dob</td>
                                <td>User hobby</td>
                                <td>User occupation</td>
                                <td>User location</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.dob}</td>
                                            <td>{user.hobby}</td>
                                            <td>{user.occupation}</td>
                                            <td>{user.location}</td>
                                            <td>
                                                <button onClick={() => this.editUser(user.id)} className="btn btn-info">Update</button>
                                                <button onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default UserConponent