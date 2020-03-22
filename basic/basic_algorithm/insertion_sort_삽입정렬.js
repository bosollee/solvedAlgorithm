/**
 * Insertion Sort 삽입 정렬
 * 시간복잡도: O(N^2)
 * 첫 번째는 놔두고, 두 번째부터 앞과 비교 정렬.
 */

function insertionSort(array) {
  let i = 1,
    j,
    temp;
  for (i; i < array.length; i++) {
    temp = array[i];
    for (j = i - 1; j >= 0 && temp < array[j]; j--) {
      array[j + 1] = array[j];
    }
    console.log(array);

    array[j + 1] = temp;
    console.log(array);
  }
  console.log(array);
  return array;
}
insertionSort([4, 3, 6, 7, 1, 2]);
