import './App.css';
import Header from "./components/header/header";
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';
import Navbar from './components/NavBar/Navbar';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs state={props.state.messagesPage}
                                                                dispatch={props.dispatch}/> } />
                    <Route path='/profile' render={()=><Profile state={props.state.profilePage} 
                                                                dispatch={props.dispatch}/> } />

                </div>
            </div>
        </BrowserRouter>
);
}

export default App;
