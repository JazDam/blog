import './App.css';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import PostDetail from './components/PostDetail';


function App() {
  return (

    <div>
    <nav className="navbar navbar-expand navbar-dark bg-light">
      <a href="/posts" className="navbar-brand" style={{color: "black"}}>
        Blog
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/posts"} className="nav-link" style={{color: "black"}}>
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link" style={{color: "black"}}>
            Agregar post
          </Link>
        </li>
      </div>
    </nav>

    <div className="container mt-3">
      <Switch>
        <Route exact path={["/", "/posts"]} component={PostList} />
        <Route exact path="/add" component={AddPost} />
        <Route path="/posts/:id" component={PostDetail} />
        
      </Switch>
    </div>
  </div>
  );
}

export default App;
