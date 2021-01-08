import React from "react";
import "./index.css";
import EventEmitter from "@components/Event";
function index() {
  const event = new EventEmitter();
  event.on("abc", (...arg) => {
    console.log(arg);
  });
  const change = () => {
    event.trigger("abc", [1, 2, 3]);
  };

  return (
    <React.Fragment>
      <div onClick={change} className="show">
        发送到发送到发阿斯顿发斯蒂芬阿斯蒂芬阿斯蒂芬按时发斯蒂芬阿萨德发斯蒂芬阿萨德
      </div>
      <div>监听数据</div>
    </React.Fragment>
  );
}
export default index;
