/**
 * Stack 스택
 * 연결 리스트인데 뒤로 넣고 뒤로만 뺄 수 있다.
 * 데이터 추가(push), 제거(pop) 기능이 있어야 한다.
 * 재귀 함수를 무한 호출하면 Stack overflow 발생.
 */

let Stack = (function() {
  // Stack, Node 생성
  function Stack() {
    this.top = null;
    this.count = 0;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  // Push 메소드 구현
  Stack.prototype.push = function(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  };

  // Pop 메소드 구현
  Stack.prototype.pop = function() {
    if (!this.top) {
      // stack underflow 방지
      return false;
    }
    let data = this.top.data;
    this.top = this.top.next;
    // 예전 this.top에 메모리 정리
    this.count--;
    return data;
  };

  Stack.prototype.stackTop = function() {
    return this.top.data;
  };

  return Stack;
})();

// test
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.stackTop();
