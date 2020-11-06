import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import './App.css';
import Main from './Pages/home/index'
import Dashboard from './Pages/dashboard/index'

import store from './store/index'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
