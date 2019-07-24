import React from "react";

const Navigation = props => {
  return (
    <div>
      <button onClick={() => props.history.push("/login")}>login</button>
      <button onClick={() => props.history.push('/library')}>library</button>
    </div>
  );
};

export default Navigation;
