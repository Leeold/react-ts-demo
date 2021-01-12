import React from "react";
import "./index.css";
//import EventEmitter from "@components/Event";
import { preOrderNoRecursive, TreeNode } from "@components/binaryTree";
function index() {
  let node = new TreeNode(1);
  node.leftChild = new TreeNode(2);
  node.rightChild = new TreeNode(3);
  preOrderNoRecursive(node);
  return (
    <React.Fragment>
      <div className="show">
        发送到发送到发阿斯顿发斯蒂芬阿斯蒂芬阿斯蒂芬按时发斯蒂芬阿萨德发斯蒂芬阿萨德
      </div>
      <div>监听数据</div>
    </React.Fragment>
  );
}
export default index;
