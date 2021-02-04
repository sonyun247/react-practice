import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Route path="/detail" exact component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);