import {romanToInt} from './roman-to-integer';

describe('Roman to Integer', () => {
  /**
   * Input: s = "IV"
   * Output: 4
   */
  it('Input: s = "III"', () => {
    expect(romanToInt('III')).toBe(3);
  });
  it('Input: s = "IV"', () => {
    expect(romanToInt('IV')).toBe(4);
  });
  it('Input: s = "VIII"', () => {
    expect(romanToInt('VIII')).toBe(8);
  });
  it('Input: s = "XIII"', () => {
    expect(romanToInt('XIII')).toBe(13);
  });
});
