import {threeSum} from "./3sum";

describe('3Sum', () => {

  /**
   * Example 1:
   * Input: nums = [-1,0,1,2,-1,-4]
   * Output: [[-1,-1,2],[-1,0,1]]
   */
  it('Input: nums = [-1,0,1,2,-1,-4]', () => {

    expect(threeSum([-1,0,1,2,-1,-4])).toBe([[-1,-1,2],[-1,0,1]]);
  });
});
