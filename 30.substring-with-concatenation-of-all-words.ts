/*
 * @lc app=leetcode id=30 lang=typescript
 *
 * [30] Substring with Concatenation of All Words
 */

// @lc code=start


/// answer 1 : use hasmap to 
function findSubstring(s: string, words: string[]): number[] {
  let strLen: number = s.length;
  let numOfWords: number = words.length;
  let wordLen: number = words[0]?.length ?? 0;
  let wordCountMap = new Map<string, number>();
  let substringLen = numOfWords * wordLen;
  let answer = [];
  for(let word of words){
    wordCountMap.set(word, (wordCountMap.get(word) ?? 0 ) + 1);
  }
  for(let i = 0; i < s.length - substringLen + 1; i++){
    if(check(i, s, substringLen, numOfWords, wordLen, wordCountMap)){
      answer.push(i);
    }
  }


  return answer;
};


function check(startIndex: number, s: string, substringLen: number,numOfWords :number, wordLen: number, wordCountMap: Map<string, number>) {
  let remaining = new Map<string, number>(wordCountMap);
  let k = 0;
  for (let i = startIndex; i < startIndex + substringLen; i = i + wordLen) {
    let sub: string = s.substring(i, i+ wordLen);
    if((remaining.get(sub) ?? 0 ) > 0 ){
      remaining.set(sub, (remaining.get(sub) ?? 0) - 1);
      k++;
    }

  }
  return k == numOfWords;
}
// @lc code=end

