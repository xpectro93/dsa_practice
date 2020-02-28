class TreeNode {
  constructor(val){
    this.val = val;
    this.descendants = [];
  }
}
class Tree{
  constructor(){
    this.root = null;
  }
}
let newTree = new Tree();
let node1 = new TreeNode(2);
let kid1 = new TreeNode(1);
let kid2 = new TreeNode(3);
node1.descendants.push(kid1);
node1.descendants.push(kid2);

// Pre-Order Traversal => Node -> left -> right 
// In-Order Traversal => left -> Node -> right 
// Post-Order Traversal => left -> right -> Node
// Reverse In-Order => right -> Node -> left