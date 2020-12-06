import React, { useState, useEffect } from "react";

import { UserLoggedInEvent } from "./project-events";

import { subscribe } from "./pubsub";

const GreeterComponent = () => {
  let [greeting, setGreeting] = useState("Hello World!");

  useEffect(() => {
    const handle = subscribe(UserLoggedInEvent, (user) => {
      setGreeting(`Hello ${user.name}!`);
    });

    return function cleanup() {
      handle.unsubscribe();
    };
  });

  return <h1>{greeting}</h1>;
};

export default GreeterComponent;
