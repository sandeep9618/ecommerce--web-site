import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginFrom from './components/LoginForm'

const App = () => (
  <>
    <Route exact path="/" component={Header} />
    <Route exact path="/login" component={LoginFrom} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
