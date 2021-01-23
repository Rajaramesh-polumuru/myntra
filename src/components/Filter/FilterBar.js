import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import All from "./MainContent";
import Boys from "./Boys";
import Men from "./Men";
import Women from "./Women";
export default function FilterBar() {
  return (
    <Router>
      <div>
        <nav className="filter-bar">
          <ul className="link">
            <h4>FILTERS</h4>
            <li>
              <Link className="link" to="/">
                All
              </Link>
            </li>
            <li>
              <Link className="link" to="/Men">
                Men
              </Link>
            </li>
            <li>
              <Link className="link" to="/Women">
                Women
              </Link>
            </li>
            <li>
              <Link className="link" to="/Boys">
                Boys
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <All />
          </Route>
          <Route exact path="/Men">
            <Men />
          </Route>
          <Route exact path="/Women">
            <Women />
          </Route>
          <Route exact path="/Boys">
            <Boys />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
