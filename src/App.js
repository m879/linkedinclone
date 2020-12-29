import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Jobs from './components/Jobs';
import Network from './components/Network';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Messages from './components/Messages';
import Profile from './components/Profile';
import Notification from './components/Notification';
import Connections from './components/profilecomponents/Connection'; 
// import Profileedit from './components/Profileedit'; 
import Networkmanage from './components/networkcomponent/Networkmanage';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/jobs" component={Jobs}/>
             <Route path="/network" component={Network}/>
             <Route path="/messages" component={Messages}/>
             <Route path="/profile" component={Profile}/>
             <Route path="/notification" component={Notification}/>
             <Route path="/connections" component={Connections}/>
             {/* <Route path="/editprofile" component={Profileedit}/> */}
             <Route path="/managenetwork" component={Networkmanage}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;