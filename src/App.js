import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import React from "react"
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import MathAreaContainer from './Containers/MathSection/AreaContainer';
import ExAreaContainer from './Containers/MathSection/ExContainer';
import { AppContextProvider } from './Context/AppContext';
import ScrollToTop from './ScrollToTop';
import TablasDeMultiplicar from './Containers/MathSection/TablasDeMultiplicar/TablasDeMultiplicar';
import TablaContainer from './Containers/MathSection/TablasDeMultiplicar/TablaContainer';
import ThreeNum from './Containers/MathSection/ThreeNum/ThreeNum';
import ExArea3Num from './Containers/MathSection/ThreeNum/ExArea';
import ChooseTablas from './Containers/MathSection/TablasDeMultiplicar/ChooseTablas';

function App() {
  return (
     <AppContextProvider>
      <Router>
      <ScrollToTop/>
        <Switch>
          <Route exact path='/'>
           <HomeContainer/>
          </Route>
          <Route exact path="/matematica">
            <MathAreaContainer/>  
          </Route>
          <Route exact path="/matematica/:type">
            <ExAreaContainer/>
          </Route>
          <Route exact path="/operaciones-con-3-numeros">
            <ThreeNum/>
          </Route>
          <Route exact path="/operaciones-con-3-numeros/:type">
            <ExArea3Num/>
          </Route>
          <Route exact path="/tablas-de-multiplicar">
            <ChooseTablas/>
          </Route>
          <Route exact path="/tablas-de-multiplicar/:rango">
            <TablasDeMultiplicar/>
          </Route>
          <Route exact path="/tablas-de-multiplicar/:rango/:number">
            <TablaContainer/>
          </Route>
        </Switch>
   </Router>
     </AppContextProvider>
  )
  ;
}

export default App;