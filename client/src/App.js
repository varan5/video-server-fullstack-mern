import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../src/components/Form/SignIn/SignIn";
import SignUp from "../src/components/Form/SignUp/SignUp";
import Upload from "./Upload/Upload";


function App() {
  return (
    <div className="App">
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/upload" component={Upload} />

    </div>
  );
}

export default App;
