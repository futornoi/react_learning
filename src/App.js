import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import News from "./Components/News/News";
import MessagesContainer from "./Components/Messages/MessagesContainer";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                {/*Profile */}
                <Route path='/profile' render={() => <Profile store={props.store}/>}
                />
                {/*Messages*/}
                <Route path='/messages' render={() => <MessagesContainer store={props.store}/>}/>
                {/* News */}
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
