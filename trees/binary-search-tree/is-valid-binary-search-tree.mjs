function isValidBST(curr, low = null, high = null) {

  if(!curr) return true;

  if((low !== null && curr.value <= low) || (high !== null && curr.value >= high)) return false;

  let isLeftBST = isValidBST(curr.left, low, curr.val);
  let isRightBST = isValidBST(curr.right, curr.val, high);

  return isLeftBST && isRightBST;
}
