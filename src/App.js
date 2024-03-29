import { Route, Switch} from 'react-router-dom'
// import NotFound from './components/NotFound'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'

const App = () => (
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
    </Switch>
  
)

export default App
