import * as fs from 'fs';

describe('zzz', () => {
  const rootPath = '/Users/vmordas/WebstormProjects/data-structures-and-algorithms/src/projectors/algorithms-5/hw-1/';

  const funA = (n: number): number => {
    let d = 0;
    for (let i = n; i > 1; i /= 2) {
      d++;
    }

    return d;
  };

  const funB = (n: number): number => {
    let d = 0;

    for (let i = 0; i*i < n; i++) {
      d++;
    }

    return d;
  };

  const funC = (n: number): number => {
    let d = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < 356; j++) {
        d++;
      }
    }

    return d;
  }

  const funD = (n: number): number => {
    let d = 0;

    for (let i = 1; i <= n*n - 10; i++) {
      for (let j = 1; j <= i; j++) {
        d++;
      }
    }
    return d;
  }

  const funE = (n: number): number => {
    let d = 0;

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        for (let k = 1; k <= j; k++) {
          d++
        }
      }
    }
    return d;
  };

  const funF = (n: number): number => {
    let d = 0;

    for (let i = 1; i <= n; i++)
      for (let j = 1; j < i; j *= 2)
        d++

    return d;
  };

  const funG = (n: number): number => {
    let d = 0;

    for (let i = 1; i <= n; i++)
      for (let j = 1; j <= n; j += i)
        d++;

    return d;
  };

  const funH = (n: number): number => {

    const compute = (n: number): number => {
      let d = 0;

      if (n == 0) return 0;
      for (let i = 0; i < n; i++) {
        d++
      }
      d += compute(Math.floor(n/2));
      d += compute(Math.floor(n/2));

      return d;
    };

    return compute(n)
  };

  const funArray = [funA, funB, funC, funD, funE, funF, funG, funH];

  const errorHandler = (error: any): void => {
    if (error) {
      console.error(error);
      return
    }
  }

  it('HW: 1, Ex. 1', () => {
    for (let n = 0; n < 100; n++){
      fs.appendFile(`${rootPath}/log.csv`, `${n},${funArray.map(fun => fun(n)).join(',')}\n`, errorHandler);
    }
    expect(true).toBeTruthy();
  });

});
