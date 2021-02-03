import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Route path="/detail" exact component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)