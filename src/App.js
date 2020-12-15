import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Auth from './utility/Auth/Auth';

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Rescue from './components/Rescue/Rescue';
import Dash from './components/Dash/Dash';
import Clients from './components/Clients/Clients';
import ClientEditor from './components/ClientEditor/ClientEditor';
import Claims from './components/Claims/Claims';
import ClaimEditor from './components/ClaimEditor/ClaimEditor';
import Policies from './components/Policies/Policies';
import PolicyEditor from './components/PolicyEditor/PolicyEditor';
import Notes from './components/Notes/Notes';
import NoteEditor from './components/NoteEditor/NoteEditor';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>

                {/* HOME PAGE */}
                <Route exact path='/' render={()=> 
                  Auth() === true ? <Home/> : <Redirect to={'/dash'}/>//false
                } />

                {/* HOME PAGE */}
                <Route exact path='/signup' render={()=> 
                  Auth() === true ? <Signup/> : <Redirect to={'/dash'}/>//false
                } />

                <Route exact path='/rescue' render={()=> 
                  Auth() === true ? <Rescue/> : <Redirect to={'/dash'}/>//false
                } />

                {/* DASH ROUTE */}
                <Route exact path='/dash' render={()=> 
                  Auth() === true ? <Dash/> : <Redirect to={'/'}/>
                } />

                {/* CLIENT ROUTES */}
                <Route exact path='/clients' render={()=>
                  Auth() === true ? <Clients/> : <Redirect to={'/'}/>
                } />

                <Route exact path='/clients/:id' render={()=> 
                  Auth() === true ? <ClientEditor/> : <Redirect to={'/'}/>
                } />
                
                {/* CLAIM ROUTES */}
                <Route exact path='/claims' render={()=> 
                  Auth() === true ? <Claims/> : <Redirect to={'/'}/>
                } />

                <Route exact path='/claims/:id' render={()=> 
                  Auth() === true ? <ClaimEditor/> : <Redirect to={'/'}/>
                } />

                {/* POLICY ROUTES */}
                <Route exact path='/policies' render={()=> 
                  Auth() === true ? <Policies/> : <Redirect to={'/'}/>
                } />

                <Route exact path='/policies/:id' render={()=> 
                  Auth() === true ? <PolicyEditor/> : <Redirect to={'/'}/>
                } />

                {/* NOTE ROUTES */}
                <Route exact path='/notes' render={()=> 
                  Auth() === true ? <Notes/> : <Redirect to={'/'}/>
                } />

                <Route exact path='/notes/:id' render={()=> 
                  Auth() === true ? <NoteEditor/> : <Redirect to={'/'}/>
                } />

                <Route render={()=> <PageNotFound/>} />

            </Switch>
        </Router>
    </div>
  );
}

export default App;