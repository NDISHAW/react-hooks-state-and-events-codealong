import React, { useState } from "react";

function Toggle() {
  let [isOn, setIson] = useState(false);
  //call the setter function to update our state variable
  function handleClick(){
    setIson((isOn) = !isOn);
  }
  const color = isOn ? "red" : "blue";

  return <button style={{background : color}} onClick={handleClick}>{isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
