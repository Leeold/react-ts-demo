import React from "react";
import EventEmitter from "@components/Event";
function B() {
  const change = () => {
    const event = new EventEmitter();
    event.on("abc", () => {
      console.log("abc");
    });
  };
  return (
    <React.Fragment>
      <div className="show">bbbbbbbbbbbbbbbb</div>
    </React.Fragment>
  );
}
export default B;
