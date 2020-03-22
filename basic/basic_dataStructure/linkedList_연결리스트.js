/**
 * Linked List 연결 리스트
 * 각 노드는 데이터, 다음 노드를 알려주는 주소를 가짐.
 * 데이터 추가, 검색, 제거 기능이 있어야 한다.
 */

let LinkedList = (function() {
  // 연결 리스트와 노드 생성
  function LinkedList() {
    this.length = 0; // 노드 개수
    this.head = null; // 첫 노드의 주소
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  // 데이터 추가 메소드 구현
  LinkedList.prototype.add = function(value) {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
      // 현재 노드가 없다면 새 노드 추가
      this.head = node;
      this.length++;
      return node;
    } else {
      // 이미 노드가 있다면
      while (current.next) {
        // 마지막 노드를 찾고
        current = current.next;
      }
      current.next = node; // 마지막 위치에 노드를 추가
      this.length++;
      return node;
    }
  };

  // 데이터 검색 메소드 구현
  LinkedList.prototype.search = function(position) {
    let current = this.head;
    let count = 0;
    while (count < position) {
      //position 위치만큼 이동
      current = current.next;
      count++;
    }
    return current.data;
  };

  // 데이터 삭제 메소드 구현
  LinkedList.prototype.remove = function(position) {
    var current = this.head;
    var before;
    var remove;
    var count = 0;
    if (position == 0) {
      // 맨 처음 노드를 삭제하면
      remove = this.head;
      this.head = this.head.next; // head를 두 번째 노드로 교체
      this.length--;
      return remove;
    } else {
      // 그 외의 다른 노드를 삭제하면
      while (count < position) {
        before = current;
        count++;
        current = current.next;
      }
      remove = current;
      before.next = remove.next;
      // remove 메모리 정리
      this.length--;
      return remove;
    }
  };
  return LinkedList;
})();

// test
let list = new LinkedList();
list.add(1);
list.add(3);
list.add(2);
list.search(0);
list.remove(1);
