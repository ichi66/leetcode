function findSubString(s){
  const length = s.length;
  let res = 0;
  for(let i  =0; i < length; i++){
    let freq = new Array(26).fill(false);
    for(let j = i ; j < length; j++){
      const cur = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
      if(freq[cur]){
        break;
      }
      freq[cur] = true;
      res = res +1;
    }

  }
  return res;
}

console.log(findSubString('bcada'));
