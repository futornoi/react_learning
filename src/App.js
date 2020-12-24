import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './Components/Nav/Nav';
import News from "./Components/News/News";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>
            <div className="app-wrapper-content">
                {/*Profile */}
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}
                />
                {/*Messages*/}
                <Route path='/messages' render={() => <MessagesContainer />}/>
                {/* News */}
                <Route path='/news' render={() => <News />}/>
                {/*Users*/}
                <Route path='/users' render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;
