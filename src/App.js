import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import React,{useState, useEffect} from "react"
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import MathAreaContainer from './Containers/MathSection/AreaContainer';
import ScienceAreaContainer from './Containers/ScienceSection/AreaContainer';
import LoadingContainer from './Components/LoadingContainer';
import { ScienceMainContainer } from './Containers/CategoryContainer/ScienceMainContainer';
import ScienceCategoryContainer from './Containers/ScienceSection/CategoryContainer';
import ScienceArticle from './Containers/ScienceSection/Article/Article';
import ExAreaContainer from './Containers/MathSection/ExContainer';

function App() {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 3000);
  }, [])
  return (
     Loading ? <LoadingContainer/> :  <Router>
     <Switch>
       <Route exact path='/'>
         <HomeContainer/>
       </Route>
       <Route exact path='/categoria/ciencia'>
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
       </Route>
        <Route exact path="/categoria/matematica">
          <MathAreaContainer/>  
        </Route>
        <Route exact path="/categoria/matematica/:type">
          <ExAreaContainer/>
        </Route>
     </Switch>
   </Router>
  )
  ;
}

export default App;