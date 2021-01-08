import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
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
import Account from './components/Account/Account';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {

  const Auth = ()=> true;

  return (

    <div className="App">
        <Router>
            <Switch>

                {/* HOME PAGE */}
                <Route exact path='/' render={()=> 
                  Auth() === true ? <Home/> : <Redirect to={'/dash'}/>//false
                } />

                {/* SIGNIN PAGE */}
                <Route exact path='/signin' render={()=> 
                  Auth() === true ? <Signin/> : <Redirect to={'/dash'}/>//false
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
                  Auth() === true ? <Dash/> : <Redirect to={'/signin'}/>
                } />

                {/* CLIENT ROUTES */}
                <Route exact path='/clients' render={()=>
                  Auth() === true ? <Clients/> : <Redirect to={'/signin'}/>
                } />

                <Route exact path='/clients/:id' render={()=> 
                  Auth() === true ? <ClientEditor/> : <Redirect to={'/signin'}/>
                } />
                
                {/* CLAIM ROUTES */}
                <Route exact path='/claims' render={()=> 
                  Auth() === true ? <Claims/> : <Redirect to={'/signin'}/>
                } />

                <Route exact path='/claims/:id' render={()=> 
                  Auth() === true ? <ClaimEditor/> : <Redirect to={'/signin'}/>
                } />

                {/* POLICY ROUTES */}
                <Route exact path='/policies' render={()=> 
                  Auth() === true ? <Policies/> : <Redirect to={'/signin'}/>
                } />

                <Route exact path='/policies/:id' render={()=> 
                  Auth() === true ? <PolicyEditor/> : <Redirect to={'/signin'}/>
                } />

                {/* NOTE ROUTES */}
                <Route exact path='/notes' render={()=> 
                  Auth() === true ? <Notes/> : <Redirect to={'/signin'}/>
                } />

                <Route exact path='/notes/:id' render={()=> 
                  Auth() === true ? <NoteEditor/> : <Redirect to={'/signin'}/>
                } />

                <Route exact path='/account' render={()=> 
                  Auth() === true ? <Account/> : <Redirect to={'/signin'}/>
                } />

                <Route render={()=> <PageNotFound/>} />

            </Switch>
        </Router>
    </div>
  );
}

export default App;