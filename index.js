import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Navigation from "./src/components/Navigation";
import Footer from "./src/components/Footer";
import BakeryItems from "./src/components/BakeryItems";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  // render() {
  //   return (
  //     <div>
  //       <Hello name={this.state.name} />
  //       <p>
  //         Start editing to see some magic happen :)
  //       </p>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <Navigation />
        <div class="container">
          <Switch>
            <Route path="/items">
              <BakeryItems />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );
