function insertIntoBST(root,val) {
    if(!root) return new Node(val);

    if(val < curr.value) {
      root.left = insertIntoBST(curr.left, val)
    }
    else {
      root.right = insertIntoBST(root.right, val)
    }

  return root;
}
