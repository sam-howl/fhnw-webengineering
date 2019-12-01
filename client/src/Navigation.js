import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {Navbar, NavItem, NavLink, Nav} from 'reactstrap'
import RecipeContainer from "./app/RecipeContainer";
import About from "./app/About";

class Navigation extends React.Component {
    render() {
        return (
            <Router>
                <div id="navigation">
                    <Navbar color="light" light expand="md">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink as={Link} href="/">Recipes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink as={Link} href="/about">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <RecipeContainer />
                    </Route>
                </Switch>
            </Router>
        )
    }

}

export default Navigation