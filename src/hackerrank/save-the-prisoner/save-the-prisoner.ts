'use strict';

/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

export const saveThePrisoner = (n: number, m: number, s: number): number => {
  if(n > Math.pow(10, 9) || n < 1) {
    throw new Error('out of range')
  }

  if(m > Math.pow(10, 9) || m < 1) {
    throw new Error('out of range')
  }

  if(s > n || s < 1) {
    throw new Error('out of range')
  }

  let r = m % n;
  if ((r + s - 1) % n == 0) {
    return n;
  } else {
    return ((r + s - 1) % n);
  }
}
