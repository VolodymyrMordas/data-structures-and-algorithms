'use strict';

/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

import {findSourceMap} from "module";

export const appendAndDelete = (s: string, t: string, k: number): string => {
  // Write your code here
  if(s.length < 1 || s.length > 100)
    throw new Error(`S = ${s}, out of length, 1<= s.length <= 100`);
  if(t.length < 1 || t.length > 100)
    throw new Error(`t = ${t}, out of length, 1<= t.length <= 100`);
  if(k < 1 || k > 100)
    throw new Error(`k = ${k}, out of length, 1<= k <= 100`);

  if(s.length + t.length < k)
    return 'Yes';

  const sArray = Array.from(s);
  const tArray = Array.from(t);

  for (let i = 0; i < k; i++){
    // console.log('ξ * ', s.substr(0, s.length - i));
    const  shouldPop = !t.startsWith(sArray.join(''));
    if(shouldPop){
      sArray.pop();
    } else {
      // console.log('ξ * ', sArray.length, k, i, t.length);
      if(sArray.length + k - i !== t.length){
        return 'No'
      } else {
        sArray.push(tArray[tArray.length - (k - i)])
      }
    }
    // console.log('ξ * ', sArray.join(''));
  }

  if (sArray.join('') === t) {
    return 'Yes'
  }

  return 'No';
}
