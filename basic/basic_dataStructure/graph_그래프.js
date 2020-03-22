/**
 * Graph 그래프
 * 버텍스(노드), 아크(엣지)
 * 버텍스 간 여러 아크 존재할 수 있다. 아크의 개수는 In-degree, Out-degree
 * 방법 1. 이차원 배열 사용, 방법 2. 연결 리스트 사용(클 수록 효율적이다)
 */

let Graph = (function() {
  function Vertex(key) {
    this.next = null;
    this.arc = null;
    this.key = key;
    this.inTree = null;
  }
  function Arc(data, dest, capacity) {
    this.nextArc = null;
    this.destination = dest;
    this.data = data;
    this.capacity = capacity;
    this.inTree = null;
  }
  function Graph() {
    this.count = 0;
    this.first = null;
  }

  Graph.prototype.insertVertex = function(key) {
    let vertex = new Vertex(key);
    let last = this.first;
    if (last) {
      while (last.next !== null) {
        last = last.next;
      }
      last.next = vertex;
    } else {
      this.first = vertex;
    }
    this.count++;
  };
  Graph.prototype.deleteVertex = function(key) {
    let vertex = this.first;
    let prev = null;
    while (vertex.key !== key) {
      prev = vertex;
      vertex = vertex.next;
    }
    if (!vertex) return false;
    if (!vertex.arc) return false;
    if (prev) {
      prev.next = vertex.next;
    } else {
      this.first = vertex.next;
    }
    this.count--;
  };
  Graph.prototype.insertArc = function(data, fromKey, toKey, capacity) {
    let from = this.first;
    let to = this.first;
    while (from && from.key !== fromKey) {
      from = from.next;
    }
    while (to && to.key !== toKey) {
      to = to.next;
    }
    if (!from || !to) return false;
    let arc = new Arc(data, to, capacity);
    let fromLast = from.arc;
    if (fromLast) {
      while (fromLast.nextArc != null) {
        fromLast = fromLast.nextArc;
      }
      fromLast.nextArc = arc;
    } else {
      from.arc = arc;
    }
  };
  Graph.prototype.deleteArc = function(fromKey, toKey) {
    let from = this.first;
    while (from !== null) {
      if (from.key === fromKey) break;
      from = from.next;
    }
    if (!from) return false;
    let fromArc = from.arc;
    let preArc;
    while (fromArc !== null) {
      if (toKey === fromArc.destination.key) break;
      preArc = fromArc;
      fromArc = fromArc.next;
    }
    if (!fromArc) return false;
    if (preArc) {
      preArc.nextArc = fromArc.nextArc;
    } else {
      from.arc = fromArc.nextArc;
    }
  };
  return Graph;
})();

// test
var graph = new Graph();
graph.insertVertex("A");
graph.insertVertex("B");
graph.insertVertex("C");
graph.insertVertex("D");
graph.insertVertex("E");
graph.insertVertex("F");
graph.insertArc(1, "A", "B");
graph.insertArc(1, "B", "C");
graph.insertArc(1, "B", "E");
graph.insertArc(1, "C", "E");
graph.insertArc(1, "C", "D");
graph.insertArc(1, "E", "D");
graph.insertArc(1, "E", "F");
