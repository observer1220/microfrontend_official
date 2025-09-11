import React from "react";
import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

/**
 * 使用 BrowserRouter 管理路由
 */
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={MarketingApp} />
            <Route path="/auth" component={AuthApp} />
          </Switch>
          <AuthApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
