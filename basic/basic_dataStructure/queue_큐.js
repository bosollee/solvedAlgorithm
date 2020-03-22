/**
 * Queue 큐
 * 연결 리스트인데 뒤로 넣고 앞으로 빠진다.
 * 데이터 추가(enqueue/push), 제거(dequeue/shift) 기능이 있어야 한다.
 */

let Queue = (function() {
  // Queue, Node 생성
  function Queue() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  // enqueue 메소드 구현
  Queue.prototype.enqueue = function(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    return ++this.count;
  };
  // dequeue 메소드 구현
  Queue.prototype.dequeue = function() {
    if (!this.head) {
      // stack underflow 방지
      return false;
    }
    let data = this.head.data;
    this.head = this.head.next;
    // this.head 메모리 정리
    --this.count;
    return data;
  };

  Queue.prototype.front = function() {
    return this.head & this.head.data;
  };
  return Queue;
})();

// test
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.front();
