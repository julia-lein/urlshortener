import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header.js';
import StartPage from './Pages/StartPage';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <body class="d-flex flex-column vh-100">

    <BrowserRouter>
       <Header />

       <div className="Page">
          <Switch>
            <Route exact path="/" component={ StartPage }/>
            <Route exact path="/login" component={ Login }/>
            <Route component={ NotFound }/>
          </Switch>
       </div>
      </BrowserRouter>




    </body>
  );
}

export default App;
