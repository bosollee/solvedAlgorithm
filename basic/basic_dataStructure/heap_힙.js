/**
 * Heap 힙
 * 완전 트리이면서 Root가 모든 경우에 자식들보다 커야한다.
 * 힙 정렬의 시간복잡도: O(NlogN)
 */

let Heap = (function() {
  function Heap() {
    this.arr = [];
  }
  // 힙의 순서를 재귀적으로 조정하는 reheapUp, reheapDown
  function reheapUp(self, idx) {
    if (idx) {
      let parent = parseInt((idx - 1) / 2);
      if (self.arr[idx] > self.arr[parent]) {
        let temp = self.arr[idx];
        self.arr[idx] = self.arr[parent];
        self.arr[parent] = temp;
        reheapUp(self, parent);
      }
    }
  }
  function reheapDown(self, idx) {
    let left = 0;
    let right = 0;
    let large;
    if (idx * 2 + 1 < self.arr.length) {
      left = self.arr[idx * 2 + 1];
      if (idx * 2 + 2 < self.arr.length - 1) {
        right = self.arr[idx * 2 + 2];
      }
      if (left > right) {
        large = idx * 2 + 1;
      } else {
        large = idx * 2 + 2;
      }
      if (self.arr[idx] < self.arr[large]) {
        let temp = self.arr[idx];
        self.arr[idx] = self.arr[large];
        self.arr[large] = temp;
        reheapDown(self, large);
      }
    }
  }
  Heap.prototype.insert = function(number) {
    let last = this.arr.length;
    this.arr[last] = number;
    reheapUp(this, last);
    return true;
  };
  Heap.prototype.delete = function() {
    if (this.arr.length === 0) {
      return false;
    }
    let del = this.arr[0];
    this.arr[0] = this.arr.pop();
    reheapDown(this, 0);
    return del;
  };
  Heap.prototype.sort = function() {
    let sort = [];
    let count = this.arr.length;
    for (let i = 0; i < count; i++) {
      sort.push(this.delete());
    }
    return sort;
  };
  return Heap;
})();

// test
var heap = new Heap();
heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(4);
heap.insert(2);
heap.insert(6);
heap.insert(1);
heap.sort();
