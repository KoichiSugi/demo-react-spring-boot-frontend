import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderConponent from './components/HeaderComponent';
import UserConponent from './components/UserConponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
//react router passes all the histry objects to each router as a props 
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderConponent />
        <div className="container">
          <Switch>http://localhost:3000/
                        <Route exact path="/" component={UserConponent}></Route>
            <Route path="/users" component={UserConponent}></Route>
            <Route path="/add-user" component={CreateUserComponent}></Route>
            <Route path="/update-user/:id" component={UpdateUserComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
