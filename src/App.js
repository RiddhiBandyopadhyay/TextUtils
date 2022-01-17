import React, { useState } from "react";
import Navbar from "./Navbar";
import Textarea from "./Textarea";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#001a33";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
        <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-4">
            <Switch>
                <Route exact path="/about">
                    <About mode={mode} className = "active"/>
                </Route>
                <Route exact path="/">
                    <Textarea mode={mode} className = "active"/>
                </Route>
            </Switch>
        </div>
        </Router>
    </>
  );
}

export default App;
