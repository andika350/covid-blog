import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {

  // const title = 'Welcome to The Blog';
  // const like = 50;
  // const link = 'https://google.com'

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>

        {/* <p>Liked {like} times!</p>
        <p>{ 10+10 }</p>
        <p>{10}</p>
        <p>{"Hello, bloggers!"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random()*5}</p>

        <a href={link} target="_blank">Google</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
