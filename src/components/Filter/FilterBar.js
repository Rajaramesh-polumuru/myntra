import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import All from "./MainContent";
import Boys from "./Boys";
import Men from "./Men";
import Women from "./Women";
import Cart from "./Cart";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

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
            <li>
              <Link className="link" to="/Cart">
                <ShoppingCartRoundedIcon />
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/myntra/">
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
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
