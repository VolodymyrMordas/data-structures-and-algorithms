{
  const toBeSorted = [4, 3, 50, 2, 1];

  const selectionSort = (forSort: number[]): void => {
    console.log('sorted array', forSort);
    for (let i = 0; i < forSort.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < forSort.length; j++) {
        if (forSort[j] < forSort[minIdx]) {
          minIdx = j;
        }

        const tmp = forSort[minIdx];
        forSort[minIdx] = forSort[i];
        forSort[i] = tmp;
      }
    }

    console.log('ξ * ', forSort);
  };

  selectionSort(toBeSorted);
}
