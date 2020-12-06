import { useEffect, useState } from "react";

import "./App.css";

import GreeterComponent from "./greeter";
import LoginComponent from "./login";

import { UserLoggedInEvent } from "./project-events";
import { subscribe } from "./pubsub";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const handle = subscribe(UserLoggedInEvent, () => {
      setShowLogin(false);
    });

    return function cleanup() {
      handle.unsubscribe();
    };
  });

  return (
    <div className="App">
      <GreeterComponent />
      {showLogin && <LoginComponent />}
    </div>
  );
}

export default App;
