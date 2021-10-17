import {lengthOfLongestSubstring} from './longest-substring-without-repeating-characters';

describe('Given a string s, find the length of the longest substring without repeating characters.', () => {
  /**
   * Input: s = "abcabcbb"
   * Output: 3
   * Explanation: The answer is "abc", with the length of 3.
   */
  it('Input: s = "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  /**
   * Input: s = "bbbbb"
   * Output: 1
   * Explanation: The answer is "b", with the length of 1.
   */
  it('Input: s = "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  /**
   * Input: s = "pwwkew"
   * Output: 3
   * Explanation: The answer is "wke", with the length of 3.
   * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
   */
  it('Input: s = "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  /**
   * Input: s = ""
   * Output: 0
   */
  it('Input: s = ""', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
