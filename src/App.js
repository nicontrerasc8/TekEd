import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import React from "react"
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import MathAreaContainer from './Containers/MathSection/AreaContainer';
import ScienceAreaContainer from './Containers/ScienceSection/AreaContainer';
import LoadingContainer from './Components/LoadingContainer';
import { ScienceMainContainer } from './Containers/CategoryContainer/ScienceMainContainer';
import ScienceCategoryContainer from './Containers/ScienceSection/CategoryContainer';
import ScienceArticle from './Containers/ScienceSection/Article/Article';
import ExAreaContainer from './Containers/MathSection/ExContainer';
import { AppContextProvider } from './Context/AppContext';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
     <AppContextProvider>
      <Router>
      <ScrollToTop/>
        <Switch>
          <Route exact path='/'>
           <HomeContainer/>
          </Route>
      {/*  <Route exact path='/categoria/ciencia'>
         <ScienceMainContainer/>
       </Route>
       <Route exact path='/categoria/ciencia/:category'>
         <ScienceCategoryContainer/>
       </Route>
       <Route exact path="/area/:area">
         <ScienceAreaContainer/>
       </Route>
       <Route exact path="/categoria/ciencia/:category/:identification">
         <ScienceArticle/>
       </Route> */}
          <Route exact path="/matematica">
            <MathAreaContainer/>  
          </Route>
          <Route exact path="/matematica/:type">
            <ExAreaContainer/>
          </Route>
        </Switch>
   </Router>
     </AppContextProvider>
  )
  ;
}

export default App;