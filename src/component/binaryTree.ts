class TreeNode {
  public data: number;
  public leftChild: TreeNode | null = null;
  public rightChild: TreeNode | null = null;
  constructor(data: number) {
    this.data = data;
  }
}

function preOrder(root: TreeNode | null): void {
  if (root) {
    console.log(root.data);
    preOrder(root.leftChild);
    preOrder(root.rightChild);
  }
}
function centerOrder(root: TreeNode | null): void {
  if (root) {
    centerOrder(root.leftChild);
    console.log(root.data);
    centerOrder(root.rightChild);
  }
}
function backOrder(root: TreeNode | null): void {
  if (root) {
    backOrder(root.leftChild);
    backOrder(root.rightChild);
    console.log(root.data);
  }
}
/**
 * 非递归方式
 * @param root
 */
function preOrderNoRecursive(root: TreeNode | null): void {
  let arr = new Array<TreeNode>();
  let treeNode: any = root;
  while (treeNode !== null || arr.length !== 0) {
    while (treeNode !== null) {
      console.log(treeNode);
      arr.push(treeNode);
      treeNode = treeNode.leftChild;
    }
    if (arr.length !== 0) {
      treeNode = arr.shift() as any;
      treeNode = treeNode.rightChild;
    }
  }
}

export { preOrder, centerOrder, backOrder, preOrderNoRecursive, TreeNode };
