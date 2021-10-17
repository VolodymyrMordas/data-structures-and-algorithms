import { saveThePrisoner } from './save-the-prisoner';

describe('save-the-prisoner', () => {



  it('Input: 7 19 2', () => {

    expect(saveThePrisoner(7, 19, 2)).toBe(6);
  });

});
