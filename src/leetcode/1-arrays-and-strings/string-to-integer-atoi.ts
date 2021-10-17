export const myAtoi = (s: string): number => {
  const newStr = s.trimStart();

  let result = !newStr.startsWith('-') ? '+' : '-';

  const str =
    newStr.startsWith('-') || newStr.startsWith('+')
      ? newStr.substring(1, newStr.length)
      : newStr;

  let stopReadCondition = false;
  let i = 0;

  while (!stopReadCondition) {
    const symbol = str[i];
    if (!isDigit(symbol)) {
      stopReadCondition = true;
      continue;
    }

    if (i === str.length - 1) {
      stopReadCondition = true;
    }

    result += symbol;
    i++;
  }

  return withRespectRangeCondition(Number(result.length === 1 ? 0 : result));
};

const isDigit = (str: string): boolean => {
  const start = 48;
  const end = 57;
  if (str.length !== 1) {
    return false;
  }

  const charCode = str.charCodeAt(0);

  return start <= charCode && charCode <= end;
};

const MIN = -2147483648;
const MAX = 2147483647;

const withRespectRangeCondition = (n: number): number => {
  if (n <= MIN) {
    return MIN;
  }

  if (n >= MAX) {
    return MAX;
  }
  return n;
};
