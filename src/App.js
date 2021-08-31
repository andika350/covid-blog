import Navbar from './Navbar';
import Home from './Home';

function App() {

  // const title = 'Welcome to The Blog';
  // const like = 50;
  // const link = 'https://google.com'

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>

        {/* <p>Liked {like} times!</p>
        <p>{ 10+10 }</p>
        <p>{10}</p>
        <p>{"Hello, bloggers!"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random()*5}</p>

        <a href={link} target="_blank">Google</a> */}
      </div>
    </div>
  );
}

export default App;
