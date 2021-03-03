import React,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from './homepage.js'
import Blogdetails from './blogs.js' 
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:id" component={Blogdetails}/>
        <Redirect to="/"/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;