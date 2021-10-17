export const romanToInt = (s: string): number => {
  const constants = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);
  const const2 = new Map([
    ['M','C'],
    ['D','C'],
    ['C','X'],
    ['L','X'],
    ['X','I'],
    ['V','I'],
  ])

  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const item = s[i];
    const previous = i != s.length - 1 ? s[i + 1] : null;
    if(!constants.get(item)){
      throw new Error('string is not valid');
    }

    if(previous) {
      if (const2.get(previous) === item) {
        sum -= constants.get(item)!
      } else {
        sum += constants.get(item)!
      }
    } else {
      sum += constants.get(item)!
    }
  }

  return sum;
};
