import { BrowserRouter as R, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Layout from "../component/Layout";
import Business from "../views/Business";
import General from "../views/General";
import Sport from "../views/Sport";
import Entertaiment from "../views/Entertaiment";
import Science from "../views/Science";
import Health from "../views/Health";
import Technology from "../views/technology";
import PageNotFound from "../views/404";

const Router = () => {
  return (
    <R>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/business">
          <Layout>
            <Business />
          </Layout>
        </Route>
        <Route path="/general">
          <Layout>
            <General />
          </Layout>
        </Route>
        <Route path="/sport">
          <Layout>
            <Sport />
          </Layout>
        </Route>
        <Route path="/entertaiment">
          <Layout>
            <Entertaiment />
          </Layout>
        </Route>
        <Route path="/science">
          <Layout>
            <Science />
          </Layout>
        </Route>
        <Route path="/health">
          <Layout>
            <Health />
          </Layout>
        </Route>
        <Route path="/technology">
          <Layout>
            <Technology />
          </Layout>
        </Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </R>
  );
};
export default Router;
