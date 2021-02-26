import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './Components/Nav/Nav';
import News from "./Components/News/News";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const SettingsContainer = React.lazy(() => import("./Components/Settings/SettingsContainer"));

class App extends React.Component {

   componentDidMount() {
      this.props.initializeApp()
   }


   render() {

      if (!this.props.initialization) return <Preloader/>

      return (
         <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>
            <div className="app-wrapper-content">
               <Switch>
                  {/*Profile */}
                  <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
                  <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                  {/*Messages*/}
                  <Route path='/messages' render={() => <MessagesContainer/>}/>
                  {/* News */}
                  <Route path='/news' render={() => <News/>}/>
                  {/*Users*/}
                  <Route path='/users' render={withSuspense(UsersContainer)}/>
                  <Route path='/login' render={() => <Login/>}/>
                  <Route path='/settings' render={withSuspense(SettingsContainer)}/>
                  <Route path={'*'} render={() => <div>404 not found</div>}/>
               </Switch>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      initialization: state.app.initialization,
   }
}

export default connect(mapStateToProps, {initializeApp})(App);
