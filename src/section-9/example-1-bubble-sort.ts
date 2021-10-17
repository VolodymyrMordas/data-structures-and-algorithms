{
  const toBeSorted = [4, 3, 50, 2, 1];

  const bubbleSort = (forSort: number[]): void => {
    console.log('sorted array', forSort);
    for (let i = 0; i < forSort.length; i++) {
      for (let j = 1; j < forSort.length - i; j++) {
        if (forSort[j - 1] > forSort[j]) {
          const tmp = forSort[j - 1];
          forSort[j - 1] = forSort[j];
          forSort[j] = tmp;
        }
      }
    }

    console.log('ξ * ', forSort);
  };

  bubbleSort(toBeSorted);
}
