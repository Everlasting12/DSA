function searchBST(curr, val) {
  if(!curr) return null;

  if(curr.value === val) return curr;

  if(val < curr.value) return searchBST(curr.left, val);

  return searchBST(curr.right, val)
}
