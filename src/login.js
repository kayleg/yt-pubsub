import React from "react";

import { UserLoggedInEvent } from './project-events';

import { publish } from './pubsub';

const LoginComponent = () => {
  const complicatedLoginThings = () => {
    // Do some complicated login things
    publish(new UserLoggedInEvent({ name: "Mr. Wonderful" }));
  };

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={complicatedLoginThings}>Sign In</button>
    </div>
  );
};

export default LoginComponent;
