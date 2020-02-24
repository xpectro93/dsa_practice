class TreeNode {
  constructor(val){
    this.val = val;
    this.kiddos = []
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
node1.kiddos.push(kid1).push(kid2);

console.log(node1)