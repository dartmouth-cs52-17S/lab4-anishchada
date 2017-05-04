import React from 'react';
import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Post from '../containers/post';
import Posts from '../containers/posts';
import NewPost from '../containers/newpost';
import '../style.scss';

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };
// const Welcome = (props) => {
//   return <div><Counter /><Controls /></div>;
// };

// This code was provided for/adapted from the lab assignment as well as the previous redux and React Router short assignments

const Nav = (props) => {
  return (
    <nav className="bloghead">
      <ul>
        <li><NavLink exact to="/" className="nav">Anish Travel Blog</NavLink></li>
        <li><NavLink to="/posts/new" className="nav">New Post</NavLink></li>
      </ul>
    </nav>
  );
};

// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };
//
// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       newID: 3,
//     };
//
//     this.Update = this.Update.bind(this);
//     this.Delete = this.Delete.bind(this);
//   }
//
//   render() {
//     return (
//       <Router>
//         <div>
//           <Nav />
//           <Switch>
//             <Route exact path="/" component={Welcome} />
//             <Route path="/about" component={About} />
//             <Route exact path="/test/:id" component={Test} />
//             <Route component={FallBack} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
