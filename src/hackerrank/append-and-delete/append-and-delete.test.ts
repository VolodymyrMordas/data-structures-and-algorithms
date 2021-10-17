import { appendAndDelete } from "./append-and-delete";

describe('append-and-delete', () => {

  it('Input: s = "hackerhappy", t = "hackerrank", k = 0', () => {

    expect(() => {
      appendAndDelete('hackerhappy', 'hackerrank', 0)
    }).toThrowError("k = 0, out of length, 1<= k <= 100");
  });

  /**
   * Example 0:
   * Input:
   * s = hackerhappy
   * t = hackerrank
   * k = 9
   * Output: YES
   */
  it('Input: s = "hackerhappy", t = "hackerrank", k = 9', () => {

    expect(appendAndDelete('hackerhappy', 'hackerrank', 9)).toBe('Yes');
  });

  /**
   * Example 1:
   * Input:
   * s = aba
   * t = aba
   * k = 7
   * Output: YES
   */
  it('Input: s = "aba", t = "aba", k = 7', () => {

    expect(appendAndDelete('aba', 'aba', 7)).toBe('Yes');
  });

  /**
   * Example 2:
   * Input:
   * s = ashley
   * t = ash
   * k = 2
   * Output: No
   */
  it('Input: s = "ashley", t = "ash", k = 2', () => {

    expect(appendAndDelete('aba', 'aba', 2)).toBe('No');
  });
});
