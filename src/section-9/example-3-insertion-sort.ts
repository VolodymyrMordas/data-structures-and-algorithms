{
  const toBeSorted = [4, 3, 50, 2, 1];
  console.log('ξ * source:', toBeSorted);
  const insertionSort = (forSort: number[]): void => {
    let sorted: number;
    for (let i = 1; i < forSort.length; i++) {
      for (let j = i; j > 0; j--) {
        if (forSort[j] < forSort[j - 1]) {
          sorted = forSort[j];
          forSort[j] = forSort[j - 1];
          forSort[j - 1] = sorted;
        }
      }
    }

    console.log('ξ * sorted:', forSort);
  };

  insertionSort(toBeSorted);
}
