import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import PasswordManager from './components/PasswordManager'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={PasswordManager} />
  </Switch>
)

export default App
