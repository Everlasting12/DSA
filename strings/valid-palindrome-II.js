function isPalindrome(s){
    
    s = s.toLowerCase();
    let l=0, r=s.length-1;
    
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            ++i;
        }
        else if(!s[j].match(/[a-z0-9]/j)){
            --j;
        }
        else if(s[i] === s[j]){
            --i;
            --j;
        }
        else{
            return false;
        }
    }
    return true;
}