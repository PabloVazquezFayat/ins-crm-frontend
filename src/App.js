import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import auth from './utility/auth/auth';

import Home from './components/Home/Home';
import Dash from './components/Dash/Dash';
import Clients from './components/Clients/Clients';
import ClientEditor from './components/ClientEditor/ClientEditor';
import Claims from './components/Claims/Claims';
import ClaimEditor from '.components/ClaimEditor/ClaimEditor';
import Policies from './components/Policies/Policies';
import PolicyEditor from './components/PolicyEditor/PolicyEditor';
import Notes from './components/Notes/Notes';
import NoteEditor from './components/NoteEditor/NoteEditor';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>

                {/* HOME PAGE */}
                <Route exact path='/' render={()=> {
                  auth() === false ? <Home/> : <Redirect to={'/dash'}/>
                }}/>

                <Route exact path='/dash' render={()=> {
                  auth() === true ? <Dash/> : <Redirect to={'/'}/>
                }} />

                {/* CLIENT ROUTES */}
                <Route exact path='/clients' render={()=> {
                  auth() === true ? <Clients/> : <Redirect to={'/'}/>
                }} />

                <Route exact path='/clients/:id' render={()=> {
                  auth() === true ? <ClientEditor/> : <Redirect to={'/'}/>
                }} />
                
                {/* CLAIM ROUTES */}
                <Route exact path='/claims' render={()=> {
                  auth() === true ? <Claims/> : <Redirect to={'/'}/>
                }} />

                <Route exact path='/claims/:id' render={()=> {
                  auth() === true ? <ClaimEditor/> : <Redirect to={'/'}/>
                }} />

                {/* POLICY ROUTES */}
                <Route exact path='/policies' render={()=> {
                  auth() === true ? <Policies/> : <Redirect to={'/'}/>
                }} />

                <Route exact path='/policies/:id' render={()=> {
                  auth() === true ? <PolicyEditor/> : <Redirect to={'/'}/>
                }} />

                {/* NOTE ROUTES */}
                <Route exact path='/notes' render={()=> {
                  auth() === true ? <Notes/> : <Redirect to={'/'}/>
                }} />

                <Route exact path='/notes/:id' render={()=> {
                  auth() === true ? <NoteEditor/> : <Redirect to={'/'}/>
                }} />

            </Switch>
        </Router>
    </div>
  );
}

export default App;