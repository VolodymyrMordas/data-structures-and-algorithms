/**
 * 1. letter cases meter?
 *
 */

/**
 *
 * @param s
 */
export const lengthOfLongestSubstring = (s: string): number => {
  if (!s.length) {
    return 0;
  }
  let i = 0;
  let j = 1;

  let subString = s[i];
  let nextElement = s[j];
  let max = subString.length;

  while (j < s.length) {
    if (!isSubstrValid(subString, nextElement)) {
      if (subString.length === 1) {
        i++;
        j++;
        nextElement = s[j];
      } else {
        i++;
      }
    } else {
      j++;
      nextElement = s[j];
    }

    subString = s.substring(i, j);

    if (subString.length > max) {
      max = subString.length;
    }
  }

  return max;
};

const isSubstrValid = (subString: string, s: string): boolean =>
  !subString.includes(s);
