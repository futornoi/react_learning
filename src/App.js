import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import News from "./Components/News/News";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                {/*Profile */}
                <Route path='/profile' render={() => <Profile />}
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
