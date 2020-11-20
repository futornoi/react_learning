import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import News from "./Components/News/News";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                {/*Profile */}
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>}
                />
                {/*Messages*/}
                <Route path='/messages' render={() => <Messages
                    messagePage={props.state.messagesPage}
                    dispatch={props.dispatch}/>}/>
                {/* News */}
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
